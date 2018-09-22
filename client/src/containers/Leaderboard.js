import React, { Component } from 'react';
import axios from 'axios';
import ScoresFilter from '../components/scores/ScoresFilter';
import ScoresTable from '../components/scores/ScoresTable';
import PaginationButton from '../components/scores/PaginationButton';
import createDataPagination from '../lib/createDataPagination';

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
      scoresToShow: [],
      paginationPlace: 0,
      filter: '',
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handlePaginationButtonClick = this.handlePaginationButtonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/get-scores').then(result => {
      const scores = createDataPagination(result.data, this.rowsPerPage);

      this.setState({ scores });
    });

  }

  handlePaginationButtonClick(paginationPlace) {
    this.setState({ paginationPlace: paginationPlace - 1 });
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

  handleFilterClick(fieldShown) {
    this.setState({ filter: fieldShown });
  }

  render() {
    return (
      <div>
        {this.renderFilters()}

        <ScoresTable scores={this.state.scores} pieceToShow={this.state.paginationPlace} />

        {this.renderPaginationButtons(this.state.scores)}
      </div>
    )
  }
}

export default Leaderboard;