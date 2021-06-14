import logo from './logo.svg';
import './App.css';
import Header from './Pages/components/homePage/homePageHeader/homePageHeader.component'
import Dashboard from './Pages/components/homePage/homePageDashboard/homePageDashboard.component'
import Footer from './Pages/components/footer/footer.component'

import MainHeader from './Pages/components/mainHeader/mainHeader.component'
import EventDashboard from './Pages/components/eventPage/eventPageDashboard/eventPageDashboard.component'
import MainNavBar from './Pages/components/mainNavBar/mainNavBar.component';
import Invite from './Pages/components/invite/invite.component'
import MainUserDashboard from './Pages/components/networkPage/mainUserDashboard/mainUserDashboard.component';



function App() {
  return (
    <div className="App">
    <Header />
    <Dashboard />
    <Footer />

    <MainHeader />
    <EventDashboard />
    <Footer />
    <Invite />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
