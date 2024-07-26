import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <SocialIcon url="https://twitter.com" />
      <SocialIcon url="https://instagram.com" />
      <SocialIcon url="https://facebook.com" />
    </div>
  )
}

export default Footer
