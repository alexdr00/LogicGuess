import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';
import RequireLoginPage from '../components/authentication/RequireLoginPage';

class Profile extends Component {
  renderLeaderboard(user) {
    if (user) {
      return <Leaderboard />
    }
  }

  renderSignInButton(user) {
    if (!user) {
      return <RequireLoginPage />
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