import React from 'react'
import InstagramIcons from '@mui/icons-material/Instagram'
import FacebookIcons from '@mui/icons-material/Facebook'
import TwitterIcons from '@mui/icons-material/Twitter'
import LinkedInIcons from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcons />
            <FacebookIcons />
            <TwitterIcons />
            <LinkedInIcons />
        </div>
        <p> &copy; 2022 edmaritosrestaurant.com </p>
    </div>
  )
}

export default Footer