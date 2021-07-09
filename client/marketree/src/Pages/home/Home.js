import './home.css'
import Header from '../components/homePage/homePageHeader/homePageHeader.component';
import HomePageDashboard from '../components/homePage/homePageDashboard/homePageDashboard.component'
import Footer from '../components/footer/footer.component'


function Home() {
  
  return (
    <div className="home">
      <Header />
      <HomePageDashboard />
      <Footer />
    </div>
  );
}

export default Home;