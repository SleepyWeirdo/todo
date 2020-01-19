import React from 'react';
import loginImg from './sign-up.png';


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    return valid;
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: null,
        email: null,
        password: null,
        formErrors: {
            username: '',
            email: '',
            password: '',
        },
    }
  }

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.username}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `)
        } else {
            console.error('Form invalid');
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'username':
                formErrors.username = value.length < 3
                    ? 'minimum 3 characters required'
                    : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) 
                  ? ''
                  : 'Invalid email address';
                break;
            case 'password':
                formErrors.password = value.length < 6
                    ? 'minimum 6 characters required'
                    : '';
                break;
            default: 
                break;
        }

        this.setState({ formErrors, [name]: value}, () => {console.log(this.state)})
    }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Register"/>
          </div>
          <form className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className={formErrors.username ? 'error' : null} type="text" name="username" placeholder="Username" onChange={this.handleChange} />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className={formErrors.email ? 'error' : null} type="email" name="email" placeholder="Email" onChange={this.handleChange} />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className={formErrors.password ? 'error' : null} type="password" name="password" placeholder="Password" onChange={this.handleChange} />
              {formErrors.password && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="footer">
                <button type="submit" className="btn">Register</button>
            </div>
          </form>
        </div> 
      </div>
    )
  }
}


export {Register};