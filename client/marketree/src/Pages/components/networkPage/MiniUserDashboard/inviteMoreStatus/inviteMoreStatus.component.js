import react from 'react';
import './inviteMoreStatus.component.css';
import InviteButton from '../inviteButton/inviteButton.component';

export default function InviteMoreStatus (props) {
  
 

  
  return (
    <div className="inviteMoreStatus">
      <div className="inviteMoreStatus_heading">
        <h4>SPREAD THE WORD</h4>
      </div>
      <div className="inviteMoreStatus_info">
        <p>Go out and invite more friends and family to have a look at your opportunity. Your Marketree will build quicker that way!</p>
      </div>
      <div className="inviteMoreStatus_affiliate-buttonLink">
        <button type="button">INVITE MORE PEOPLE</button>
      </div>
      
    </div>
  )

}