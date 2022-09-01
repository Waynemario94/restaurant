import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/perfect.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'
    style={{ backgroundImage: `url(${BannerImage})` }}
    >
        <div className='headerContainer'>
            <h1> Ed's Bar And Grill</h1>
            <p> THE GENTLEMEN'S HIDEOUT</p>
            <Link to='/menu'>
            <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home