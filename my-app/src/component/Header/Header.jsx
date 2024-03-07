import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
  return (
    <div className='header'>
      <Link to="/" className="link">Home</Link> |
      <Link className="link" to="/contact" >contact</Link> |
      <Link className="link" to="/cv" >cv</Link>
    </div>
  )
}
