import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pieces from './components/Pieces'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Pieces} />
        </div>
      </Router>
    );
  }
}
export default App;