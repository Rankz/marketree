import react from 'react';
import './CurrentUser.component.css';
import Image from '../../../network/images/man icon.png';



export default function CurrentUser ({userTree, totalNetwork}) {
  let length;

  if (userTree.children) {
    length = userTree.children.length
  }
  
  return (
    <div className="Currentuser">
        <img src={Image}></img>
      <div className="user__firstName">
        <p>{userTree.firstName}</p>
      </div>
      <div className="user__lastName">
        <p>{userTree.lastName}</p>
      </div>
      <div className="user__branches">
      <p><span>{length}</span> branches = <span>{totalNetwork.length}</span> memebers</p>
    </div>
      <div className="Currentuser__status">
        <p>Active</p>
      </div>
    </div>
  )

}