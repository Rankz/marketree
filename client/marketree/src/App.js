import './App.css';
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Invite from './Pages/invite/invite'
import Network from './Pages/network/network';
import Event from './Pages/event/event'
import Home from './Pages/home/home'
import {getUserTree, getSingleUser, sendEmailInvite} from './services/ApiService';

const dummyUser = {
  firstName: "Jane",
  lastName: "Doe",
  affiliateLink: "",
  children:[],
  id:1
}

function App() {

  const [userTree, setUserTree] = useState(dummyUser);

  return (
    <div className="App">
      <Route path="/home">
        <Home />
      </Route>
      
      <Route path="/event-page/:id">
      <Event setUserTree={setUserTree}/>
      </Route>
      
      <Route path="/my-network/:id">
        <Network getSingleUser={getSingleUser} getUserTree={getUserTree} setUserTree={setUserTree} userTree={userTree}/>
      </Route>
      
      <Route path="/invite/:id">
       <Invite sendEmailInvite={sendEmailInvite}/>
      </Route>

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </div>
  );
}

export default App;
