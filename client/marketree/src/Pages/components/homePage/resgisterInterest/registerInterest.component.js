import react from 'react';
import './registerInterest.component.css';


export default function RegisterInterest () {
  
  return (
    <div className="signUpForm__Wrapper">
      <div className="signUpForm__Title">
        <h1>Register your interest today</h1>
        <p>We'll help connect you with someone, to start building your very own Marketree!</p>
      </div>
      <form className="signUpForm"> 
      <div className="signUpForm__name">
        <input
          className="signUpForm__name-first"
          placeholder="First Name"
        >
        </input> 
        <input
          className="signUpForm__name-last"
          placeholder="Last Name"
        > 
        </input>
      </div>
      <div className="signUpForm__input--email">
          <input
            placeholder="Email address" 
          > 
          </input>
        </div>
      <div className="signUpForm__submit--button">
        <button type="submit">Register</button>
        <p>By joining Marketree you agree to our terms and conditions</p>  
      </div> 
      </form>
    </div>
  )

}