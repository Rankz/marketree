import react from 'react';
import './eventPageDashboard.component.css';
import EventVideo from '../eventPageVideo/eventVideo.component';
import SignUpForm from '../signUpForm/signUpForm.component';
import TreeLogo from '../../../home/images/Marketree-Website-Homepage-Tree.png'
import VoteButtons from '../eventPageVoteButtons/eventVoteButtons.component';
import { useState } from 'react';

export default function EventDashboard ({addNewUser}) {

  const [displaySignUp, setDisplaySignUp] = useState(false);
  return (
    <div className="dashboard">
      {displaySignUp}
      <div className="dashboard_infoSection">
        <img src={TreeLogo}></img>
        <div className="dashboard_video-text--section">
          <div className="dashboard_infoSection-video" >
            <EventVideo />
          </div>
          <div className="dashboard_infoSection-butons">
          <VoteButtons setDisplaySignUp={setDisplaySignUp} />  
          </div>
        </div>
      </div>
      <div className="dashboard_register"> 
        {displaySignUp &&  <SignUpForm addNewUser={addNewUser} />}
      </div>
    </div>
  )

}