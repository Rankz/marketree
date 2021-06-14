import react from 'react';
import './signUpForm.component.css';


export default function SignUpForm (props) {
  
 

  
  return (
    <div className="signUpForm__Wrapper">
      <div className="signUpForm__Title">
        <h1>Sign up today</h1>
        <p>It's free, calculates risks, and takes less than 2 minutes</p>
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
        <div className="signUpForm__input--password">
          <input 
            placeholder="Password" 
            // value ={date} 
            // type="datetime-local"
            // onChange={(e => setDate(e.target.value))}
          > 
          </input>
        </div>
        <div className="signUpForm__input--re-password">
          <input 
            placeholder="Re-enter password" 
            // value ={venue} 
            // type="text" 
            // onChange={(e => setVenue(e.target.value))}
          > 
          </input>
        </div>
      <div className="signUpForm__submit--button">
        <button type="submit">Sign up</button>
        <p>By joining Marketree you agree to our terms and conditions</p>
      
      </div> 
      </form>
    </div>
  )

}