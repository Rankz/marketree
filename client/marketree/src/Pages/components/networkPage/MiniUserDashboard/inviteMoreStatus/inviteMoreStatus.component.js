import react from 'react';
import './inviteMoreStatus.component.css';
import { useParams } from 'react-router-dom' 

export default function InviteMoreStatus () {
  
  const params = useParams();
  const dynamicUrl = `/invite/${params.id}`

  return (
    <div className="inviteMoreStatus">
      <div className="inviteMoreStatus_heading">
        <h4>SPREAD THE WORD</h4>
      </div>
      <div className="inviteMoreStatus_info">
        <p>Go out and invite more friends and family to have a look at your opportunity. Your Marketree will build quicker that way!</p>
      </div>
      <div className="inviteMoreStatus_affiliate-buttonLink">
        <form action={dynamicUrl}>
          <button type="submit">INVITE MORE PEOPLE</button>
        </form>
      </div>
      
    </div>
  )

}