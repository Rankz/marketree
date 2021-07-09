import './event'
import MainHeader from '../components/mainHeader/mainHeader.component'
import EventDashboard from '../components/eventPage/eventPageDashboard/eventPageDashboard.component'
import Footer from '../components/footer/footer.component'
import { registerNewUser } from '../../services/ApiService';

function Event({ setUserTree }) {

  const addNewUser = async (firstName, lastName, email, password, parentId) => {
    const newUser = await registerNewUser(firstName, lastName, email, password, parentId);
    setUserTree(prev => {
      console.log(prev)
      return [...prev, newUser];
    })}

  return (
    <div className="event">
      <MainHeader />
      <EventDashboard addNewUser={addNewUser}/>
      <Footer />
    </div>
  );
}

export default Event;