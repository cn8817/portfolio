import React from "react";
import { Rate } from 'antd'

export default function About(){
    return(
        <div className="about-container">
            <div className="about-intro">
                <h1 className="about-h1">Hi, I'm Christine Nguyen</h1>
                <h2 className="about-h2">I'm Full Stack Web Developer based in Las Vegas, NV. I'm passionate about frontend developement and thrive off creating reponsive, user friendly, and efficient applications</h2>
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
            <div><p>Learn more by downloading my Resume!</p></div>
        </div>
    )
}