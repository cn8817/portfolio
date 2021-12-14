import React from "react";
import { Rate, Image } from 'antd'
import Cats from '../Assets/cats.png'

export default function About(){
    return(
        <div className="about-container">
            <div className="about-intro">
                <h1 className="about-h1">Hi, I'm Christine Nguyen</h1>
                <h2 className="about-h2">I'm a Full Stack Web Developer based in Las Vegas, NV. Frontend Developement is my specialty and creating responsive, user-friendly, and efficient applications is my passion!</h2>
            </div>
            <div className="about-skills">
            <div>
                <h3 className="about-h3">Frontend</h3>
                <p>HTML<Rate disabled allowHalf defaultValue={3.5} /></p>
                <p>CSS <Rate disabled allowHalf defaultValue={3.5} /></p>
                <p>JavaScript <Rate disabled allowHalf defaultValue={3.5} /></p>
                <p>React <Rate disabled allowHalf defaultValue={4} /></p>
                <p>Redux <Rate disabled allowHalf defaultValue={3.5} /></p>
                <p>Jest <Rate disabled allowHalf defaultValue={3.5} /></p>
            </div>
            <div>
                <h3 className="about-h3">Backend</h3>
                <p>Node <Rate disabled allowHalf defaultValue={2.5} /></p>
                <p>Express <Rate disabled allowHalf defaultValue={2.5} /></p>
                <p>SQL <Rate disabled allowHalf defaultValue={2} /></p>
                <p>Python <Rate disabled allowHalf defaultValue={2.5} /></p>
                <p>Heroku <Rate disabled allowHalf defaultValue={2.5} /></p>
            </div>
            </div>
            <div className="about-learn"><p>Learn more by downloading my Resume!</p></div>
            <div className="special">
                <h3 className="special-h3">Special thanks to my cats for always stepping on my laptop when I'm coding:</h3>
                <div className='cats'>
                    <Image src={Cats}/>
                    <p>Carrot & Potato</p>
                </div>
            </div>
        </div>
    )
}