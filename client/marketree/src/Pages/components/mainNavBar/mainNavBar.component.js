import react from 'react';
import './mainNavBar.component.css';
import { useParams } from 'react-router-dom';


export default function MainNavBar (props) {
  
  const params = useParams();
  const dynamicUrl = `/my-network/${params.id}`;

  return (
    <div className= "navBar">
    <div className="navBar-menu">
      <ul className="navBar-menu-items">
      <li><a href={dynamicUrl}>Network</a></li>
        <li><a href="/home">Logout</a></li>
      </ul>
    </div>
  </div>
  )
}