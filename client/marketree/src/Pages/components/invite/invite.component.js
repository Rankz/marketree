import react from 'react';
import './invite.component.css';
import TreeImage from '../../home/images/Marketree-Website-Homepage-Tree.png'
import EmailForm from './emailForm/emailForm.component';
import MainNavBar from '../mainNavBar/mainNavBar.component';

export default function InviteDashboard ({sendEmailInvite}) {

  return (
    <div className="container">
      <MainNavBar />
      <div className="inviteDashboard">
        <div className="inviteDashboard_sendInvite">
          <img src={TreeImage}></img>
          <div className="inviteDashboard_sendInvite--section">
            <div className="inviteDashboard_sendInvite--Instructions">
              <h1>Inviting freinds is an important part of getting your Marketree to grow and expand, exponentially. Once your Marketree is big enough, you can then start growing your business.</h1>
            </div>
            <div className="inviteDashboard_sendInvite--fields" >
              <EmailForm sendEmailInvite={sendEmailInvite} />
              <EmailForm />
              <EmailForm />
              <EmailForm />
              <EmailForm />
            </div>
          </div>
        </div>
        <div className="inviteDashboard_sendInvite--confirmation"> 
        </div>
      </div>
    </div>
  )

}