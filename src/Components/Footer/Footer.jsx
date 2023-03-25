import React from 'react'
import { Instagram,Twitter,Discord } from 'react-bootstrap-icons'
import "./Footer.css"
function Footer() {
  return (
   <div className="footermain">
<div className="copy">© 2022 All Rights Reserved.</div>
<div className="social"><Instagram className='instagram' />  <Discord className='discord' /> <Twitter className='twitter' /></div>
<div className="terms">Terms of use of the site.</div>


   </div>
  )
}

export default Footer