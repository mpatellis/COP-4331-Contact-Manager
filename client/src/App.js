import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Menu from './components/menu'
import Pieces from './components/Pieces'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/pieces" component={Pieces} />
        </div>
      </Router>
    );
  }
}
export default App;