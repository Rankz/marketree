import react from 'react';
import './homePageHeroImagecomponent.css';
import Image from '../../../home/images/heroImage5.jpg'


export default function HeroImage () {

  return (
    <div className="heroImage">
      <img src={Image}></img>
    </div>
  )

}