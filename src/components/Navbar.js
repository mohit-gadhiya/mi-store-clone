import React from 'react'
import '../styles/Navbar.css';
import data from "../data/data.json"
// import logo from '../data/data.json'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="logo">
          <Link to='/'>
             <img id='logoimage' src={data.logo} alt='Not'/>
          </Link>
       </div>
          <Link className='navlinks' to='/miphones'>Mi Phones</Link>
          <Link className='navlinks' to='/redmiphones'>RedMi Phones</Link>
          <Link className='navlinks' to='/tv'>TV</Link>
          <Link className='navlinks' to='/laptops'> Laptops</Link>
          <Link className='navlinks' to='/lifestyles'>Fitness & Lifestyles</Link>
          <Link className='navlinks' to='/home'>Home</Link>
          <Link className='navlinks' to='/audio'>Radio</Link>
          <Link className='navlinks' to='/accesories'>Accessories</Link>
       <div className="searchbox">
          <input type="text" name="search" placeholder="Search Products"/>
       </div>
    </div>
  )
}

export default Navbar