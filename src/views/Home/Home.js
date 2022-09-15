import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className='home' > 
      Bookster
      <br />
       <div className='home-menu'> 
          Have an Account? 

          <br />
          <Link to="/login">
          <button className='button'>login</button>
          </Link>
          <Link to="/signup">
          <button className='button'>signup</button>
          </Link>
       </div>
    </section>
  )
}

// will eventually build out main landing page with info and sign up / login form