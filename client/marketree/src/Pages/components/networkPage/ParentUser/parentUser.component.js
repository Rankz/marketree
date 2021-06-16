import react from 'react';
import './parentUser.component.css';
import Image from '../../../network/images/3549-Ian-Michaels-©Michael-Wharley-2018-5.jpg'
import { useState, useEffect } from 'react';
import { getUserTree } from '../../../../services/ApiService';





export default function ParentUser ({userTree, totalNetwork}) {

  
  let Parent;

  console.log('PARENT', userTree.parent_id)

  if (userTree.parent_id) {
    Parent = userTree.parent_id;
  }
  

  let length;

  if (userTree.children) {
    length = userTree.children.length
  }
  
 const date = new Date().toString();

  
  return (
    <div className="Parentuser">
      <div className="Parentuser__lineBreak"></div>
        <img src={Image}></img>
      <div className="user__firstName">
        <p>{Parent.firstName}</p>
      </div>
      <div className="user__lastName">
        <p>{Parent.lastName}</p>
      </div>
      <div className="user__status">
        <p>PARENT</p>
      </div>

    </div>
  )

}