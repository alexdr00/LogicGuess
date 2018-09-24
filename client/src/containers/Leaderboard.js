import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ScoresFilter from '../components/scores/ScoresFilter';
import ScoresTable from '../components/scores/ScoresTable';
import NextPreviousButton from '../components/scores/NextPreviousButton';
import PaginationButton from '../components/scores/PaginationButton';
import createDataPagination from '../lib/createDataPagination';
import filterScores from '../lib/filterScores';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    // Pagination (scores per page)
    this.rowsPerPage = 10;

    this.filters = [
      { buttonLabel: 'Todos', fieldShown: 'all' },
      { buttonLabel: 'Tus Puntajes', fieldShown: 'userScores' },
      { buttonLabel: 'Fácil', fieldShown: 'easy' },
      { buttonLabel: 'Moderado', fieldShown: 'moderate' },
      { buttonLabel: 'Difícil', fieldShown: 'hard' },
      { buttonLabel: 'Lotería', fieldShown: 'lottery' },
    ];

    this.state = {
      scores: [],
      // The sames scores but in pagination format
      scoresPagination: [],
      paginationPlace: 0,
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePaginationButtonClick = this.handlePaginationButtonClick.bind(this);
  }

  componentDidMount() {
    // Get the scores and store them in local state
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
        // last place
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
    // From the resulting filtration, create the data pagination.
    const scoresPagination = createDataPagination(scoresToShow, this.rowsPerPage);

    this.setState({ scoresPagination, paginationPlace: 0 });
  }

  // Render as many button as pagination pages.
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

  // Filter buttons
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
        <div className="filters">
          {this.renderFilters()}
        </div>

        <ScoresTable
          scores={this.state.scoresPagination}
          username={this.props.auth.username}
          page={this.state.paginationPlace}
          filter={this.state.filter}
          rowsPerPage={this.rowsPerPage}
        />

        <div className="pagination">
          <NextPreviousButton
            previousOrNext={'previous'}
            paginationPlace={this.state.paginationPlace}
            scoresPagination={this.state.scoresPagination}
            onClick={this.handlePaginationButtonClick}
          />

          {this.renderPaginationButtons(this.state.scoresPagination)}

          <NextPreviousButton
            previousOrNext={'next'}
            paginationPlace={this.state.paginationPlace}
            scoresPagination={this.state.scoresPagination}
            onClick={this.handlePaginationButtonClick}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Leaderboard);