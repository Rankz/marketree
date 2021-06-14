import react from 'react';
import './homePageDashboard.component.css';
import HeroImage from '../../homePage/homePageHeroImage/homePageHeroImage.component'
import HomePageInfo from '../homePageInfoSection/homePageInfoSection.component';
import RegisterInterest from '../../homePage/resgisterInterest/registerInterest.component';
import TreeLogo from '../../../home/images/Marketree-Website-Homepage-Tree.png'

export default function HomePageDashboard (props) {
  
  
  return (
    <div className="dashboard">
    
      <div className="dashboard_infoSection">
        <img src={TreeLogo}></img>
        <div className="dashboard_video-text--section">
          <div className="dashboard_infoSection-image" >
            <HeroImage />
          </div>
          <div className="dashboard_infoSection-text">
            <HomePageInfo />
          </div>
        </div>
      </div>

      <div className="dashboard_register">
        <RegisterInterest />
        
      </div>
    </div>
  )

}