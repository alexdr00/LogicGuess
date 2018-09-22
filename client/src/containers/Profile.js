import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import SignInButton from '../components/authentication/SignInButton';

class Profile extends Component {
  componentDidMount() {
    if (window.sessionStorage.scoreData) {
      const scoreData = JSON.parse(window.sessionStorage.scoreData);
      window.sessionStorage.clear();
      axios.post('/api/submit-score', scoreData);
    }
  }

  renderLeaderboard(user) {
    if (user) {
      return <Leaderboard />
    }
  }

  renderSignInButton(user) {
    if (!user) {
      return <SignInButton />
    }
  }

  render() {
    return (
      <div className="main-content">
        {this.renderLeaderboard(this.props.auth)}
        {this.renderSignInButton(this.props.auth)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Profile);