import react from 'react';
import './miniUserDashboard.component.css';

import AffiliateSignUp from './affiliateSignUp/affiliateSignUp.component';
import InsertAffiliateLink from './insertAffiliateLink/insertAffiliateLink.component';
import NetworkInfo from './networkInfo/networkInfo.component';
import NetworkView from './networkViewButtons/networkView.component';
import InviteMoreStatus from './inviteMoreStatus/inviteMoreStatus.component';
import { useEffect, useState } from 'react';





export default function MiniUserDashboard ({ userTree, totalNetwork }) {

 
    



  
  return (
    <div className="miniUserDashboard">
      <NetworkInfo userTree={userTree} totalNetwork={totalNetwork} />
      <div className="lineBreak"></div>
      <NetworkView />
      <div className="actionBox">
      {totalNetwork.length < 10 ? <InviteMoreStatus /> : 
        <div>
        <AffiliateSignUp userTree={userTree} />
        <InsertAffiliateLink userTree={userTree} />
      </div>
      }
      
      </div>
    </div>
  )

}