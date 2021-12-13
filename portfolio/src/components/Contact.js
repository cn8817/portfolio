import React from 'react'
import { Image } from 'antd'

export default function Contact() {
    return(
        <div className='contact-container'>
            <div className='contact-title'><h2 className='contact-h1'>Contact me here:</h2></div>
            <div className='contact-info'>
                <p className='contact-p'>Email: <a className='contact-a' href = "mailto: christinen8817@gmail.com">christinen8817@gmail.com</a></p>
                <p className='contact-p'>LinkedIn: <a className='contact-a' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christine8817/">Christine8817</a></p>
            </div>
            <div className='contact-extra'><p className='contact-p'>(contact form in the process of making!)</p></div>
            <div>
                <h3>Special Thanks to:</h3>
                <div className='potato'>
                    <Image src=''/>
                </div>
                <div className='carrot'>
                    <Image src=''/>
                </div>
            </div>
        </div>
    )
}