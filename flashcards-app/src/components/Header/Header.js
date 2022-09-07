import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className='header'>
        <Link to="/" className='title'>Flashcards app</Link>
        <hr className='divider' />
    </div>
  )
}

export default header