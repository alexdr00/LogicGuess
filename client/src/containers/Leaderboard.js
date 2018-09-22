import React, { Component } from 'react';
import axios from 'axios';
import ScoresFilter from '../components/scores/ScoresFilter';
import ScoresTable from '../components/scores/ScoresTable';
import createDataPagination from '../lib/createDataPagination';
import filterScores from '../lib/filterScores';
import PaginationButton from '../components/scores/PaginationButton';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.rowsPerPage = 5;

    this.filters = [
      { buttonLabel: 'Fácil', fieldShown: 'easy' },
      { buttonLabel: 'Moderado', fieldShown: 'moderate' },
      { buttonLabel: 'Difícil', fieldShown: 'hard' },
      { buttonLabel: 'Lotería', fieldShown: 'lottery' },
      { buttonLabel: 'Todos', fieldShown: 'all' },
      { buttonLabel: 'Tus Puntajes', fieldShown: 'userScores' },
    ];

    this.state = {
      scores: [],
      scoresPagination: [],
      paginationPlace: 0,
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePaginationButtonClick = this.handlePaginationButtonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/get-scores').then(result => {
      const scoresPagination = createDataPagination(result.data, this.rowsPerPage);
      const scores = result.data;

      this.setState({ scores, scoresPagination });
    });
  }

  handlePaginationButtonClick(paginationPlace) {
    this.setState({ paginationPlace: paginationPlace - 1 });
  }

  handleFilterClick(fieldShown) {
    const scoresToShow = filterScores(fieldShown, this.state.scores, this.props.auth.username);
    const scoresPagination = createDataPagination(scoresToShow, this.rowsPerPage);

    this.setState({ scoresPagination });
  }

  renderPaginationButtons(scores) {
    const paginationButtons = [];

    for (let i = 1; i <= scores.length; i++) {
      paginationButtons.push(
        <PaginationButton
          key={i}
          paginationNumber={i}
          onClick={this.handlePaginationButtonClick}
        />
      );
    }

    return paginationButtons;
  }

  renderFilters() {
    const buttonsFilter = [];

    this.filters.forEach(filter => {
      buttonsFilter.push(
        <ScoresFilter
          key={filter.buttonLabel}
          buttonLabel={filter.buttonLabel}
          fieldShown={filter.fieldShown}
          onFilterClick={this.handleFilterClick}
        />
      );
    });

    return buttonsFilter;
  }

  render() {
    return (
      <div>
        {this.renderFilters()}

        <ScoresTable
          scores={this.state.scoresPagination}
          username={this.props.auth.username}
          pieceToShow={this.state.paginationPlace}
          filter={this.state.filter}
          rowsPerPage={this.rowsPerPage}
        />

        {this.renderPaginationButtons(this.state.scoresPagination)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Leaderboard);