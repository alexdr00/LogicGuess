import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Components
import Navbar from './NavbarContainer';
import Game from './Game';
import Profile from './Profile';
import Manual from '../components/main-components/Manual';
import Footer from '../components/layout/Footer';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// Make solid and brand icons available to all the components
library.add(fas, fab);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Navbar></Navbar>

          <Route exact path="/" component={Profile}/>
          <Route exact path="/manual" component={Manual} />
          <Route exact path="/game" component={Game}/>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);