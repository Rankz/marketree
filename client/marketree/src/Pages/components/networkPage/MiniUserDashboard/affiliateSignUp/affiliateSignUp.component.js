import react from 'react';
import './affiliateSignUp.component.css';


export default function AffiliateSignUp ({userTree}) {
  
  let parentName;
  let affiliateUrl;
  const userName = userTree.firstName
 
  if (userTree.parentIdId) {
    affiliateUrl = userTree.parent_id.affiliateLink;
    parentName = `${userTree.parent_id.firstName} ${userTree.parent_id.lastName}`
  } else {
    affiliateUrl = "https://www.marykay.co.uk/en-gb/find-an-independent-beauty-consultant?babc=true"
    parentName = "whoever invited you to Marketree"
  }

  
  return (
    <div className="affiliateSignUp">
      <div className="affiliateSignUp_heading">
        <h4>YOUR TREE IS NOW RIPE</h4>
      </div>
      <div className="affiliateSignUp_info">
        <p>Hi {userName} You are now ready to start your own business venture with {parentName}</p>
      </div>
      <div className="affiliateSignUp_affiliate-buttonLink">
        <form action={affiliateUrl}target="_blank">
          <button type="submit" >START MY BUSINESS</button>
        </form>
      </div>
      
    </div>
  )

}