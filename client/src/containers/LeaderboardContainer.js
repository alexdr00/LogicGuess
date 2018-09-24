import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';
import RequireLoginPage from '../components/authentication/RequireLoginPage';

class LeaderboardContainer extends Component {
  renderSignInButton(user) {
    if (!user) {
      return <RequireLoginPage />
    }
  }

  renderLeaderboard(user) {
    if (user && Object.keys(user).length !== 0) {
      return <Leaderboard />
    }
  }

  render() {
    return (
      <div className="main-content">
        {this.renderSignInButton(this.props.auth)}
        {this.renderLeaderboard(this.props.auth)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(LeaderboardContainer);