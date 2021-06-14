import react from 'react';
import './insertAffiliateLink.component.css';


export default function InsertAffiliateLink (props) {
  
 

  
  return (
    <div className="insertAffiliateLink">
      <div className="insertAffiliateLink__heading">
        <h4>INSERT YOUR VERY OWN AFFILIATE LINK</h4>
      </div>
      <div className="insertAffiliateLink__text">
        <p>Once you start you business, insert your affliate link in the box below. We'll distribute it throughout your network.</p>
      </div>
      <div className="insertAffiliateLink__form">
        <form>
          <input
            placeholder="Insert affiliate link" 
            // label="Title"
            // value ={title} 
            // type="text" 
            // onChange={(e => setTitle(e.target.value))}
            > 
          </input>
          <button type="submit">SUBMIT AFFILIATE LINK</button>
        </form>
      </div>
      
    </div>
  )

}