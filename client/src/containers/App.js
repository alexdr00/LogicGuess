import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

// Components
import Navbar from './NavbarContainer';
import Home from '../components/Home';
import Manual from '../components/Manual';
import Game from '../components/Game';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// Make solid icons available to all the components
library.add(fas);

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <div>
            <Navbar></Navbar>

            <Route exact path="/" component={Home}/>
            <Route exact path="/manual" component={Manual} />
            <Route exact path="/game" component={Game}/>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;