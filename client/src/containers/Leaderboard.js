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

    // Pagination (scores per page)
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

  handlePaginationButtonClick(paginationPlace = 1, currentPlace, scores) {
    switch (paginationPlace) {
      case 'previous':
        if (currentPlace === 0){
          break;
        }

        this.setState({ paginationPlace: currentPlace - 1 });
        break;
      case 'next':
        if (currentPlace === scores.length - 1){
          break;
        }

        this.setState({ paginationPlace: currentPlace + 1 });
        break;
      default:
        // Since it's an array, it's necessary to subtract one (so it maches with the index which is 0 based).
        this.setState({ paginationPlace: paginationPlace - 1 });
    }
  }

  handleFilterClick(fieldShown) {
    const scoresToShow = filterScores(fieldShown, this.state.scores, this.props.auth.username);
    // Create a data pagination of the scores filtered
    const scoresPagination = createDataPagination(scoresToShow, this.rowsPerPage);

    this.setState({ scoresPagination, paginationPlace: 0 });
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
          page={this.state.paginationPlace}
          filter={this.state.filter}
          rowsPerPage={this.rowsPerPage}
        />

        <button
          onClick={() => this.handlePaginationButtonClick(
            'previous',
            this.state.paginationPlace,
            this.state.scoresPagination
          )}
        >
          &larr;
        </button>

        {this.renderPaginationButtons(this.state.scoresPagination)}

        <button
          onClick={() => this.handlePaginationButtonClick(
            'next',
            this.state.paginationPlace,
            this.state.scoresPagination
          )}
        >
          &rarr;
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Leaderboard);