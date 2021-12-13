import React from 'react'
import { Link } from 'react-router-dom'
// import '../../public/resume.pdf'

export default function Nav(){

    return(
        <div className='nav-container'>
            <div className='left'>
                <h1 className='left-h1'>CN</h1>
            </div>

            <div className='right'>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to ='/projects'>Projects</Link>
                <Link className='link' to ='/contact'>Contact</Link> 
                <a className='link download' href='resume.pdf' download>Download Resume</a>
            </div>
        </div>
    )
}