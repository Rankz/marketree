import react from 'react';
import './registerInterest.component.css';


export default function RegisterInterest (props) {
  
 

  
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
      // label="Title"
      // value ={title} 
      // type="text" 
      // onChange={(e => setTitle(e.target.value))}
      >
      </input> 

      <input
      className="signUpForm__name-last"
      placeholder="Last Name" 
      // label="Title"
      // value ={title} 
      // type="text" 
      // onChange={(e => setTitle(e.target.value))}
      > 
      </input>
      </div>
      <div className="signUpForm__input--email">
          <input
            placeholder="Email address" 
            // label="Title"
            // value ={title} 
            // type="text" 
            // onChange={(e => setTitle(e.target.value))}
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