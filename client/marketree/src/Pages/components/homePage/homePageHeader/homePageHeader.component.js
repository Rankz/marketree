import react from 'react';
import './homePageHeader.component.css';
import HeaderLogo from '../../../home/images/Marketree-logo_Fnl_White_without-tree.png'


export default function Header (props) {
  
  
  return (
    <div className="homePageHeader">
      <img className = "homePageHeaderLogo" src={HeaderLogo} />
      <div className="homePageHeader_login">
        <form action="/my-network/1">
          <div className="homePageHeader_login-fields">
            <div className="homePageHeader_login-fields-emailLable">
              <label >Email address</label>
              <input
              className="homePageHeader_login-fields-email"> 
              </input>
            </div>
            
            <div className="homePageHeader_login-fields-passwordLable">
              <label >Password</label>
              <input
                className="homePageHeader_login-fields-password"
                type="password"
              > 
              </input>
            </div>
            
            <div className="homePageHeader_login-button" >
              <button type="submit">Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}