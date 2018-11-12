import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import financialsService from './services/financials';

//Fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import all necessary fontawesome icons here
import { faGhost, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NoPageError from './pages/NoPageError';

library.add(faGhost, faUserCircle);

class App extends Component {
  state = {
    data: [],
    mobile: undefined
  };

  async componentDidMount() {
    const data = await financialsService.getAll();
    console.log(data);
    this.setState({ data: data });

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({ mobile: window.innerWidth >= 768 });
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route
              path="/dashboard"
              render={() => <Dashboard mobile={this.state.mobile} />}
            />
            <Route component={NoPageError} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
