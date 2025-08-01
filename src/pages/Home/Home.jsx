import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const handlePlay = () => {
    navigate("/Player/585839");
  }


  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn' onClick={handlePlay} ><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcomming"} category={"upcoming"} />
        <TitleCards title={"Top picks for you"} category={"now_playing"}/>
      </div> 
      <Footer />
    </div>
  )
}

export default Home
