import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from './components/menu'
import Pieces from './components/Pieces'
import Logout from './components/logout'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/pieces" component={Pieces} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}
export default App;