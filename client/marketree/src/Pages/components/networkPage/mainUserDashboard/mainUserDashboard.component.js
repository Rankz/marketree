import react from 'react';
import './mainUserDashboard.component.css';

import MiniUserDashboard from '../MiniUserDashboard/miniUserDashboard.component';
import StatusBar from '../statusBar/statusBar.component';
import UserNetworkList from '../userNetworkList/userNetworkList.component';


export default function MainUserDashboard (props) {
  
 

  
  return (
    <div className="mainUserDashboardContainer">
      <div className="mainDashBoard">
        <div className="mainDashbord__userNetworkList">
          <UserNetworkList />
        </div>
        <div className="mainDashbord__miniUserDashboard">
          <MiniUserDashboard />
        </div>
      </div>
    </div>
  )

}