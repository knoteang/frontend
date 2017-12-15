import React, { Component } from 'react';
import App from '../Component/header/App';
import SignupForm from '../Component/SignUpForm/SignUpForm'
import '../Styles/Singup.css'
import Pic from '../pic/blue.jpg'


  const sectionStyle = {
    width: "100%",
    height: "745px",
    backgroundImage: "url(" + Pic + ")"
  };
class SignUp extends Component {


  render() {
    return (
   <div style={sectionStyle}>
      <div className="Singup" > 
        <App />
        <SignupForm />
      </div>
      </div>
    );
  }
}

export default SignUp