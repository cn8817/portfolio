import React from "react";
import linkedin from '../Assets/linkedin.png'
import github from '../Assets/github.png'

export default function About(){

    const onClickUrl = (url) => {
        return () => window.open(url, "_blank")
      }
      
    return(
        <div className="about-container" id='about'>
            <div className="about-intro">
                <h1 className="about-h1">Hi, I'm Christine Nguyen</h1>
                <h2 className="about-h2">I'm a Full Stack Web Developer based in Las Vegas, NV. Frontend Developement is my specialty and creating responsive, user-friendly, and efficient applications is my passion!</h2>
                <div className="about-social">
                    <img onClick={onClickUrl('https://github.com/cn8817')} className='about-img' src={github}/>
                    <img onClick={onClickUrl('https://www.linkedin.com/in/christine8817/')} className='about-img' src={linkedin}/>
                </div>
            </div>
            <div className="about-skills">
            <div>
                <h3 className="about-h3">Frontend</h3>
                <p>HTML</p>
                <p>CSS </p>
                <p>JavaScript </p>
                <p>React </p>
                <p>Redux </p>
            </div>
            <div>
                <h3 className="about-h3">Backend</h3>
                <p>Node  </p>
                <p>Express  </p>
                <p>SQL  </p>
                <p>Python  </p>
                <p>Heroku  </p>
            </div>
            </div>
            <div className="about-learn"><p>Learn more by downloading my Resume!</p></div>
        </div>
    )
}