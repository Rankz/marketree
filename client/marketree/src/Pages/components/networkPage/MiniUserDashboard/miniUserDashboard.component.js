import react from 'react';
import './miniUserDashboard.component.css';

import AffiliateSignUp from './affiliateSignUp/affiliateSignUp.component';
import InsertAffiliateLink from './insertAffiliateLink/insertAffiliateLink.component';
import InviteButton from './inviteButton/inviteButton.component';
import NetworkInfo from './networkInfo/networkInfo.component';
import NetworkView from './networkViewButtons/networkView.component';
import InviteMoreStatus from './inviteMoreStatus/inviteMoreStatus.component';



export default function MiniUserDashboard (props) {
  
 

  
  return (
    <div className="miniUserDashboard">
      <NetworkInfo />
      <div className="lineBreak"></div>
      <NetworkView />
      <div className="actionBox">
        <InviteMoreStatus />
        <AffiliateSignUp />
        <InsertAffiliateLink />
      </div>
    </div>
  )

}