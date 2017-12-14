import React, { Component } from 'react';
import App from '../Component/header/App';
import SignupForm from '../Component/SignUpForm/SignUpForm'
import '../Styles/Singup.css'
import Pic from '../pic/p.jpeg'



class SignUp extends Component {
  render() {
    return (

      <div className="Singup" > 
        <App />
        <SignupForm />
      </div>
    );
  }
}

export default SignUp