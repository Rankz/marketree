import react from 'react';
import './signUpForm.component.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function SignUpForm ({addNewUser}) {
  
  const history = useHistory()
  const params = useParams()
  const parentId = params.id;
  const routeChange = () =>{ 
    let path = `event-page/${parentId}`; 
    history.push(path);
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addNewUser(firstName, lastName, email, password, parentId);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRePassword('');
  }

  
  return (
    <div className="signUpForm__Wrapper">
      <div className="signUpForm__Title">
        <h1>Sign up today</h1>
        <p>It's free, calculates risks, and takes less than 2 minutes</p>
      </div>
      <form className="signUpForm" onSubmit={submitHandler}> 
        <div className="signUpForm__name">
        <input
        className="signUpForm__name-first"
        placeholder="First Name" 
        label="FirstName"
        value ={firstName} 
        type="text" 
        onChange={(e => setFirstName(e.target.value))}
        >
        </input> 

        <input
        className="signUpForm__name-last"
        placeholder="Last Name" 
        label="Last Name"
        value ={lastName} 
        type="text" 
        onChange={(e => setLastName(e.target.value))}
        > 
        </input>
        </div>
        <div className="signUpForm__input--email">
            <input
              placeholder="Email address" 
              label="Email"
              value ={email} 
              type="text" 
              onChange={(e => setEmail(e.target.value))}
            > 
            </input>
          </div>
          <div className="signUpForm__input--password">
            <input 
              placeholder="Password" 
              label="password"
              value ={password} 
              type="password"
              onChange={(e => setPassword(e.target.value))}
            > 
            </input>
          </div>
          <div className="signUpForm__input--re-password">
            <input 
              placeholder="Re-enter password" 
              label="rePassword"
              value ={rePassword} 
              type="password" 
              onChange={(e => setRePassword(e.target.value))}
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