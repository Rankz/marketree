import react from 'react';
import './eventVoteButtons.component.css';


export default function VoteButtons (props) {
  
 

  
  return (
    <div className="container">
      <div className="voteButtons">
        <div className="voteButtons__green">
          <button className="voteButtons__green-button"></button>
        </div>
        <div className="voteButtons__amber">
          <button className="voteButtons__amber-button"></button>
        </div>
        <div className="voteButtons__red">
          <button className="voteButtons__red-button"></button>
        </div>
      </div>

      <div className="homePageInfo">
      <div className="homePageInfo-header">
        <h1>After watching the event, click the appropriate coloured button</h1>

      </div>
      <div className="homePageInfo-body">
        <p>select 'green' for interested, 'amber' if you have more questions for *insert parent name*, or 'red' if it's not for you.</p>
      </div>
    </div>
    
    
    </div>
    
  )

}