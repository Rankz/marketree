import react from 'react';
import './networkInfo.component.css';


export default function NetworkInfo (props) {
  
 

  
  return (
    <div className="networkInfo">
      <div className="networkInfo_Heading">
        <h1>YOUR MARKETREE NETWORK</h1>
      </div>
      <div className="networkInfo_branchInfo">
        <div className="networkInfo_branchInfo--branchText">
          <p>
            <span className="networkInfo__numFormat">4 </span>
            <span className="branchHeading">Branches </span>
            <span className="normalText">link you to</span>
            <br></br>
          </p>
        </div>
        <div className="networkInfo_branchInfo--networkText">
        <p>
          <span className="networkInfo__numFormat">120 </span>
          <span className="normalText">people</span>
          <br></br>
        </p>
      </div>
      </div>
    </div>
  )

}