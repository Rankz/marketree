import react from 'react';
import './mainUserDashboard.component.css';

import MiniUserDashboard from '../MiniUserDashboard/miniUserDashboard.component';
import UserNetworkList from '../userNetworkList/userNetworkList.component';


export default function MainUserDashboard ({userTree, totalNetwork}) {
  
  return (
    <div className="mainUserDashboardContainer">
      <div className="mainDashBoard">
        <div className="mainDashbord__userNetworkList">
          <UserNetworkList userTree={userTree} totalNetwork={totalNetwork} />
        </div>
        <div className="mainDashbord__miniUserDashboard">
          <MiniUserDashboard userTree={userTree} totalNetwork={totalNetwork} />
        </div>
      </div>
    </div>
  )
}