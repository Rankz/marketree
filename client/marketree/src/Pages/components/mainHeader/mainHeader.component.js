import react from 'react';
import './mainHeader.component.css';
import MainHeaderLogo from '../../home/images/Marketree-logo_Fnl_White_without-tree.png'

export default function MainHeader (props) {

  return (
    <div className="mainHeader">
      <img className = "mainHeaderLogo" src={MainHeaderLogo} />
    </div>
  )

}