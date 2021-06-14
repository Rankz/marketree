import react from 'react';
import './eventPageDashboard.component.css';
import EventVideo from '../eventPageVideo/eventVideo.component';
import SignUpForm from '../signUpForm/signUpForm.component';
import TreeLogo from '../../../home/images/Marketree-Website-Homepage-Tree.png'
import VoteButtons from '../eventPageVoteButtons/eventVoteButtons.component';

import CreateProfile from '../createProfile/createProfile.component'

export default function EventDashboard (props) {
  
  
  return (
    <div className="dashboard">
    
      <div className="dashboard_infoSection">
        <img src={TreeLogo}></img>
        <div className="dashboard_video-text--section">
          <div className="dashboard_infoSection-video" >
            <EventVideo />
          </div>
          <div className="dashboard_infoSection-butons">
          <VoteButtons />  
          </div>
        </div>
      </div>

      <div className="dashboard_register"> 
      <SignUpForm />
        
      </div>
    </div>
  )

}