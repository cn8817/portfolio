import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className='nav-container'>
            <div className='left'>
                <h1 className='left-h1'>CN</h1>
            </div>

            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to ='/projects'>Projects</Link>
                <Link className='link' to ='/contact'>Contact</Link> 
                <a className='link download' href='resume.pdf' download>Download Resume</a>
            </div>
                <div className='hamburger' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
        </div>
    )
}