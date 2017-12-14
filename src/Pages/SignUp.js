import React, { Component } from 'react';
import App from '../Component/header/App';
import SignupForm from '../Component/SignUpForm/SignUpForm'
import '../Styles/Singup.css'
import Pic from '../pic/p.jpeg'
const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + Pic + ")"

};


class SignUp extends Component {
  render() {
    return (

      <div className="Singup" > <div style={sectionStyle}>
        <App />
        <SignupForm />
      </div></div>
    );
  }
}

export default SignUp