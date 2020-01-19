import React from 'react';
import loginImg from './sign-up.png';

export class Login extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Login"/>
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="footer">
              <button type="button" className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}