import react from 'react';
import './user.component.css';
import Image from '../../../home/images/3549-Ian-Michaels-©Michael-Wharley-2018-5.jpg'


export default function User (props) {
  
 const date = new Date().toString();

  
  return (
    <div className="user">
        <img src={Image}></img>
      <div className="user__firstName">
        <p>Ian</p>
      </div>
      <div className="user__lastName">
        <p>Michaels</p>
      </div>
      <div className="user__joinedOn">
        <p>22/06/2021</p>
      </div>
      <div className="user__branches">
        <p><span>2</span> branches = <span>72 </span>memebers</p>
      </div>
      <div className="user__status">
        <p>Active</p>
      </div>
    </div>
  )

}