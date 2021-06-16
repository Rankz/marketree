import './invite.css'
import MainHeader from '../components/mainHeader/mainHeader.component';
import InviteDashboard from '../components/invite/invite.component'
import Footer from '../components/footer/footer.component'


function Invite({sendEmailInvite}) {
  return (
    <div className="invite">
      <MainHeader />
      <InviteDashboard sendEmailInvite={sendEmailInvite} />
      <Footer />
    </div>
  );
}

export default Invite;