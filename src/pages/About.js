import React from 'react'
import AboutTop from '../assets/another.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop'
        style={{ backgroundImage: `url(${AboutTop})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Ed's brings incredible blends of various cultures to the community in Accra. The restaurant offers fine dining with a blended cultural theme of modern Ghanaian cuisine. Ed’s authentic dishes draw inspiration from early Ghanaian cuisine with mixed Intercontinental interpretations. Ed's is located at 2620 Manor Valley Street Awulewu and the hours of operation are Tuesday-Saturday 3:30 a.m-2 a.m, closed Mondays. Our Award-winning Sunday Brunch is from 11 a.m.- 10:00 2:30 p.m. Sunday Night Dinner is from 3 p.m.-10 p.m. For more information, call us directly at 055-441-5494 or visit edmaritosrestaurant.com or like us on Facebook at facebook.com/edmaritosrestaurant and follow us on Twitter @EdMaritos and Instagram at EdMaritos.</p>
        </div>
    </div>
  )
}

export default About