import React, { Component } from "react";
import axios from 'axios'

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log()
    axios
        //.get('/user/allusers')
        .post("/user/login", user)
        .then(res => {console.log(res.body)})
        .catch(err => {
          console.log(err.message)
        })


  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


  render() {
    return (
        <div className="wrapper">
            <div className="container">
                <form>
                    <p>Login</p>
                    <input type="text" 
                        id="username" 
                        onChange={this.onChange}
                        placeholder="Username"/>
                    <input type={"password"}
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="Password"
                        id='password'
                        />
                    <input type="submit" value="Submit"
                      onClick={this.handleSubmit} />
                </form>
            </div>
        </div>
        
    );
  }
}

export default PasswordShowHide;