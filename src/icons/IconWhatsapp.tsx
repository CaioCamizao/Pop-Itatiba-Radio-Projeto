import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './IconWhatsapp.css'

const Icones = () => {
  return (
    <div className="whatsapp-icon-container">
      <a
        href="https://wa.me/11947258692"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FloatingWhatsApp
          className="whatsapp-icon"
          phoneNumber={''}
          accountName={''}
        />
      </a>
    </div>
  )
}

export default Icones
