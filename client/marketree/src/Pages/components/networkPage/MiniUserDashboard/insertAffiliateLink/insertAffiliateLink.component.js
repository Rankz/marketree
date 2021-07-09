import react from 'react';
import './insertAffiliateLink.component.css';
import { useState } from 'react';
import { addAffiliateLink } from '../../../../../services/ApiService';


export default function InsertAffiliateLink ({userTree}) {
  
  const id = userTree.id;
  const [url, setUrl] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addAffiliateLink(id, url);
    setUrl('');
  }
  
  return (
    <div className="insertAffiliateLink">
      <div className="insertAffiliateLink__heading">
        <h4>INSERT YOUR VERY OWN AFFILIATE LINK</h4>
      </div>
      <div className="insertAffiliateLink__text">
        <p>Once you start you business, insert your affliate link in the box below. We'll distribute it throughout your network.</p>
      </div>
      <div className="insertAffiliateLink__form">
        <form onSubmit={submitHandler}>
          <input
            placeholder="Insert affiliate link" 
            label="url"
            value ={url} 
            type="text" 
            onChange={(e => setUrl(e.target.value))}
            > 
          </input>
          <button type="submit">SUBMIT AFFILIATE LINK</button>
        </form>
      </div>   
    </div>
  )

}