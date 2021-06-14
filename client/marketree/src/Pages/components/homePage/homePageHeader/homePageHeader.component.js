import react from 'react';
import './homePageHeader.component.css';
import HeaderLogo from '../../../home/images/Marketree-logo_Fnl_White_without-tree.png'


export default function Header (props) {
  

  
  return (
    <div className="homePageHeader">
      <img className = "homePageHeaderLogo" src={HeaderLogo} />
      <div className="homePageHeader_login">
        <form>
          <div className="homePageHeader_login-fields">
            <div className="homePageHeader_login-fields-emailLable">
              <label >Email address</label>
              <input
              className="homePageHeader_login-fields-email"
              // placeholder="Email" 
              // label="Title"
              // value ={title} 
              // type="text" 
              // onChange={(e => setTitle(e.target.value))}
              > 
              </input>
            </div>
            
            <div className="homePageHeader_login-fields-passwordLable">
              <label >Password</label>
              <input
              className="homePageHeader_login-fields-password"
              // placeholder="Email" 
              // label="Title"
              // value ={title} 
              // type="text" 
              // onChange={(e => setTitle(e.target.value))}
              > 
              </input>
            </div>
            
            <div className="homePageHeader_login-button" >
              <button type="button">Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}