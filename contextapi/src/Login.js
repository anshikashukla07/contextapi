import React, { Component } from 'react';
import { AuthConsumer } from './AuthContext';
import history from './history';
import Navbar from  './Navbar';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            loggedIn: false
        }
    }


    handleChange = (evt) => {                
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
    }

    handleSubmit = () => {
        const {username, email, password} = this.state;
        if(username && email && password) {
            history.push("/home");
        }
        else {
            alert('First Login');
        }
    }


    render() { 
        return (

      <AuthConsumer>
        {({ isAuth, login }) => (
                  <div className="main">
                      <form className="col-3">
                          <div className="form-group">
                              <label>Username</label>
                              <input 
                                  name="username" 
                                  type="text" 
                                  className="form-control" 
                                  value={this.state.username} 
                                  onChange={this.handleChange}
                              />
                          </div>
                          <div className="form-group">
                              <label>Email address</label>
                              <input 
                                  name="email" 
                                  type="text" 
                                  className="form-control" 
                                  value={this.state.email}
                                  onChange={this.handleChange}
                              />
                          </div>
                          <div className="form-group">
                              <label>Password</label>
                              <input 
                                  name="password" 
                                  type="password" 
                                  className="form-control" 
                                  value={this.state.password}
                                  onChange={this.handleChange}
                              />
                          </div>
                          <button 
                              type="submit" 
                              className="btn btn-primary"
                              onClick={() => {
                                  const {username, email, password} = this.state;
                                  if(username && email && password) {
                                      login();
                                      console.log(isAuth);
                                  }
                                  else {
                                      alert('First Login');
                                  }
                              }}>
                                  Submit
                          </button>
                      </form> 
                  </div>
        )}
      </AuthConsumer>
        )
    }
}
 
export default Login;