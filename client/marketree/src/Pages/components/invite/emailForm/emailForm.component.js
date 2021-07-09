import react from 'react';
import { useState, useEffect } from 'react';
import './emailForm.component.css';
import { useParams } from 'react-router-dom' 
import { getSingleUser, getUserTree } from '../../../../services/ApiService'


export default function EmailForm ({sendEmailInvite}) {
  
  const [email, setEmail] = useState('');
  const params = useParams();
  const id = params.id;
  const submitHandler = (e) => {
    e.preventDefault();
    sendEmailInvite(email, id);  
    setEmail('');
  }

  return (
    <div className="emailField">
      <form onSubmit={submitHandler}>
        <div className="emailField__input">
            <input
              placeholder="Email address" 
              label="email"
              value ={email} 
              type="text" 
              onChange={(e => setEmail(e.target.value))}
            > 
            </input>
        </div>
        <div className="emailField__button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )

}