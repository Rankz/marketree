import react from 'react';
import './networkView.component.css';


export default function NetworkView () {
  
  return (
    <div className="networkViewButtons">
      <div className="viewMyBranches">
        <button type="button">My Branches</button>
      </div>
      <div className="viewMyBranches">
        <button type="button">Entire Netowrk</button>
      </div>
    </div>
  )

}