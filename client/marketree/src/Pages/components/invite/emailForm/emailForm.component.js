import react from 'react';
import './emailForm.component.css';



export default function EmailForm (props) {
  
 

  
  return (
    <div className="emailField">
      <form>
        <div className="emailField__input">
            <input
              placeholder="Email address" 
              // label="Title"
              // value ={title} 
              // type="text" 
              // onChange={(e => setTitle(e.target.value))}
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