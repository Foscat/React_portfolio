import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Main from "./components/pages/Main";
import Portfolio from "./components/pages/Portfolio";
import NavBar from "./components/pieces/Nav";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => (
              <Main
                // search={this.state.user}
                // selected={this.state.grabbed}
              />
            )} />
            <Route exact path="/portfolio" render={() => (
              <Portfolio
                // search={this.state.user}
                // selected={this.state.grabbed}
              />
            )} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
      </div>
    </Router>
    )
  }

};// End App router component

export default App;
