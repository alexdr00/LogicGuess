import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AskUsername from '../components/askUsername/AskUsername';
import axios from 'axios';
import Leaderboard from './Leaderboard';

class Profile extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     inputValue: null,
  //   }

  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleUsernameSubmission = this.handleUsernameSubmission.bind(this);
  // }

  // handleUsernameSubmission() {
  //   axios.put('/api/set-username', { username: this.state.inputValue });
  // }

  // handleInputChange(event) {
  //   this.setState({ inputValue: event.target.value });
  // }

  // renderAskUsername(profile) {
  //   if (Object.keys(profile).length !== 0 && !profile.username) {
  //     return <AskUsername
  //       name={profile.name}
  //       onUsernameSubmission={this.handleUsernameSubmission}
  //       onInputChange={this.handleInputChange}
  //     />
  //   }
  // }

  componentDidMount() {
    if (window.sessionStorage.scoreData) {
      const scoreData = JSON.parse(window.sessionStorage.scoreData);
      window.sessionStorage.clear();
      axios.post('/api/submit-score', scoreData);
    }
  }

  render() {
    return (
      <div className="main-content">
        {/* {this.renderAskUsername(this.props.auth)} */}
        <Leaderboard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Profile);