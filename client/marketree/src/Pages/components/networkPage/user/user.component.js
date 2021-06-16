import react from 'react';
import './user.component.css';
import Image from '../../../network/images/woman Icon.jpeg'
import { useState, useEffect } from 'react';
import { getUserTree } from '../../../../services/ApiService';



const dummyUser = {
  firstName: "Jane",
  lastName: "Doe",
  affiliateLink: "",
  children:[],
  id:1


}

export default function User ({firstName, pic, lastName, children, user}) {

  
  
  console.log('users', children)

  let length;

  if (children) {
    length = children.length
  }
  
 const date = new Date().toString();

  
  return (
    <div className="user">
        <img src={Image}></img>
      <div className="user__firstName">
        <p>{firstName}</p>
      </div>
      <div className="user__lastName">
        <p>{lastName}</p>
      </div>
      <div className="user__branches">
        <p><span>{length}</span> branches</p>
      </div>
      <div className="user__status">
        <p>Active</p>
      </div>
    </div>
  )

}