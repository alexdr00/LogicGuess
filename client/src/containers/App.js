import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Navbar from './NavbarContainer';
import Home from '../components/Home';
import Manual from '../components/Manual';
import Game from './Game';
import Footer from '../components/Footer';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// Make solid icons available to all the components
library.add(fas);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Navbar></Navbar>

          <Route exact path="/" component={Home}/>
          <Route exact path="/manual" component={Manual} />
          <Route exact path="/game" component={Game}/>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;