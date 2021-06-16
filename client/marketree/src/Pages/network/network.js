import './network.css'
import Header from '../components/mainHeader/mainHeader.component'
import MainUserDashboard from '../components/networkPage/mainUserDashboard/mainUserDashboard.component'
import Footer from '../components/footer/footer.component'
import MainNavBar from '../components/mainNavBar/mainNavBar.component'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


function Network({userTree, setUserTree, getUserTree}) {

  const params = useParams();
  const id = params.id;



  useEffect (() => {
    getUserTree(id)
    .then(userTree => setUserTree(userTree))
  }, []);

  
  const result = [];
  const findTotalNetwork = (user) => {
    console.log(user)

    if (user.children.length > 0) {
        user.children.forEach(child => {
        result.push(child)
        return findTotalNetwork(child);
      })
    }
    return result
  }

  const totalNetwork = findTotalNetwork(userTree)


    console.log('THIS IS MY ALL MY MINIONS!', totalNetwork );

  return (
    <div className="Home">
      <Header />
      <MainNavBar />
      <MainUserDashboard userTree={userTree} totalNetwork={totalNetwork} />
      <Footer />
    </div>
  );
}

export default Network;