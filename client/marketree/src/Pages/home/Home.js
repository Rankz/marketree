import './Home.css'
import Header from '../components/homePage/homePageHeader/homePageHeader.component'
import Dashboard from '../components/homePage/homePageDashboard/homePageHeader.component'
import Footer from '../components/footerComponent/footer.component'


function Home() {
  return (
    <div className="Home">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default Home;