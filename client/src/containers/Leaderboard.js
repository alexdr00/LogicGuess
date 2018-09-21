import React, { Component } from 'react';
import axios from 'axios';
import ScoresFilter from '../components/scores/ScoresFilter';
import TableScores from '../components/scores/TableScores';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      filter: '',
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/get-scores').then(result => {
      const scores = result.data;
      this.setState({ scores });
    });
  }

  handleFilterClick(fieldShown) {
    this.setState({ filter: fieldShown });
  }

  render() {
    return (
      <div>
        <ScoresFilter buttonLabel="Fácil" onFilterClick={this.handleFilterClick} fieldShown='easy' />

        <ScoresFilter buttonLabel="Moderado" onFilterClick={this.handleFilterClick} fieldShown='moderate' />

        <ScoresFilter buttonLabel="Difícil" onFilterClick={this.handleFilterClick} fieldShown='hard' />

        <ScoresFilter buttonLabel="Lotería" onFilterClick={this.handleFilterClick} fieldShown='lottery' />

        <ScoresFilter buttonLabel="Tus Puntajes" onFilterClick={this.handleFilterClick} fieldShown='userScores' />

        <ScoresFilter buttonLabel="Todos" onFilterClick={this.handleFilterClick} fieldShown='all' />

        <TableScores scores={this.state.scores} />

      </div>
    )
  }
}

export default Leaderboard;