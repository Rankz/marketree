import react from 'react';
import './inviteButton.component.css';
import { useParams } from 'react-router-dom' 


export default function InviteButton () {
  
 const params = useParams();
 const dynamicUrl = `/invite/${params.id}`

  return (
    <div className="inviteButtons">
      <div className="inviteButton">
        <form action={dynamicUrl}>
          <button type="submit">Invite Friends/Family</button>
        </form>
      </div>
    </div>
  )

}