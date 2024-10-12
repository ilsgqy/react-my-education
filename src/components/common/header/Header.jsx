import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Head from './head'
import './header.css'


const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <div>
      <Router>
        <Head/>
        <header>
          <nav className="flexSB">
            <ul className={click ? "mobil-nav" : "flexSB"} onClick={() => {
              setClick(false);
            }}>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/courses" >All Courses</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/team" >Team</Link></li>
              <li><Link to="/pricing" >Pricing</Link></li>
              <li><Link to="/journal" >Journal</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
            <div className="start">
              <div className="button">Get CERTIFICATE</div>
            </div>
            <button className='toggle' onClick={() => { setClick(!click) }}>
              {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
      </Router>

    </div>
  )
}

export default Header
