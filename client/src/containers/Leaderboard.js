import React, { Component } from 'react';
import axios from 'axios';
import { log } from 'util';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
    }
  }

  componentDidMount() {
    axios.get('/api/get-scores').then(result => {
      const scores = result.data.allScores;
      this.setState({ scores });
    });
  }

  renderAllScores() {
    this.state.scores.map(score => {
        return (
        <tr>
          <td>{score.level}</td>
          <td>{score.attempts}</td>
          <td>{score.timeElapsed}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Intentos</th>
              <th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {this.renderAllScores()}
          </tbody>

        </table>
      </div>
    );
  }
}

export default Leaderboard;