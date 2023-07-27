import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginSuccessful: false,
      username: '',
      password: '',
      loginError: '',
      loginSuccess: '',
      username1: 'maria',
      password1: 'maria',
      username2: 'glen',
      password2: 'glen',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.username === this.state.password) {
      if (
        (this.state.username === this.state.username1 &&
          this.state.password === this.state.password1) ||
        (this.state.username === this.state.username2 &&
          this.state.password === this.state.password2)
      ) {
        this.setState({
          isLoginSuccessful: true,
          loginSuccess: 'Login Successful. Now you can close the page',
        });
      } else {
        this.setState({
          loginError: 'Invalid details!',
        });
      }
    } else {
      this.setState({
        loginError: 'Username and password doesnt match',
      });
    }
  };

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>Login Page</p>
        </div>
        <div>
          {this.state.isLoginSuccessful === false ? (
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <input
                  type="text"
                  placeholder="username"
                  onChange={(e) => this.onUsernameChange(e)}
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => this.onPasswordChange(e)}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              <div>{this.state.loginError}</div>
            </form>
          ) : (
            <div>
              <p>{this.state.loginSuccess}</p>{' '}
            </div>
          )}
        </div>
      </div>
    );
  }
}
