import react from 'react';
import './userNetworkList.component.css';
import User from '../user/user.component';
import CurrentUser from '../CurrentUser/CurrentUser.component';


export default function UserNetworkList ({userTree, totalNetwork}) {
  
  const branches = userTree.children
  .map(user => <User user={user} firstName={user.firstName} pic={user.profilePicture} lastName={user.lastName}  children={user.children} />)
  
  return (
    <div className="userNetworkList">
      <CurrentUser userTree={userTree} totalNetwork={totalNetwork} />
      {branches}
    </div>
  )

}