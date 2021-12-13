import React, {useState} from "react";
import { Modal, Button, Image } from 'antd';
import "antd/dist/antd.css";
import Potluck from '../Assets/Potluck.png'
import Market from '../Assets/Market.png'
import Ghibli from '../Assets/ghibli.png'

export default function Projects() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModal2 = () => {
        setIsModalVisible2(true);
    };
    const showModal3 = () => {
        setIsModalVisible3(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleOk2 = () => {
        setIsModalVisible2(false);
    };
    const handleOk3 = () => {
        setIsModalVisible3(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };
    const handleCancel3 = () => {
        setIsModalVisible3(false);
    };

    return(
        <div className="project-container">
            <h1 className="project-h1">Projects</h1>
            <div className="project-wrap">

                <div className="project-card">
                    <div className="one">
                        <Image className='project-image' src={Potluck}/>
                    </div>
                    <div className="project-info">
                        <div><h3>Potluck Planner</h3></div>
                        <div className="project-btn">
                        <Button type="primary" onClick={showModal}>
                            More Details
                        </Button>
                        <Modal title='Potluck Planner' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p>Description: Create and invite users to a potluck. Manage items, time, date, location, and attendees as an organizer. Accept or decline invites and manage attending potlucks as a user</p>
                            <p>Backend:</p>
                            <ul>
                                <li>Created authentication with JSON web tokens</li>
                                <li>Made backend endpoints for HTTP requests on the client side</li>
                                <li>Used PostgreSQL to create databases, table schemas, migration, and seed scripts</li>
                            </ul>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://front-end-tau-teal.vercel.app/">Website</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Build-Week-Potluck-Planner-5/front-end">Github</a></p>
                        </Modal>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="two">
                    <Image className='project-image' src={Market}/>
                    </div>
                    <div className="project-info">
                        <div><h3>African Marketplace</h3></div>
                        <div className="project-btn">
                        <Button type="primary" onClick={showModal2}>
                            More Details
                        </Button>
                        <Modal title='AfricanMarket' visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
                            <p>Description: A platform to enable African business owners to create listings for items they have for sale and users to view listings from different market regions</p>
                            <p>Frontend:</p>
                            <ul>
                                <li>Created HTTP requests in a logical manner</li>
                                <li>Handled client side token authorization</li>
                                <li>Successfully used RESTful API's to implement data into the application</li>
                            </ul>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://african-marketplace-project.vercel.app/">Website</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Build-Week-African-Marketplace-02/front-end">Github</a></p>
                        </Modal>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="three">
                        <Image src="error" fallback="data:image/png;base64,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"/>
                    </div>
                    <div className="project-info">
                        <div><h3>CoderHeroes</h3></div>
                        <div className="project-btn">
                        <Button type="primary" onClick={showModal3}>
                            More Details
                        </Button>
                        <Modal title='CoderHeroes' visible={isModalVisible3} onOk={handleOk3} onCancel={handleCancel3}>
                        <p>Description: A web application to aid in the cause of helping underprivileged youth in the Chicagoland area break into tech. Parents can sign their children up for courses, view courses, view course schedules, and view their children's progress! Instructors can create and manage their classes, upload assignments, and post resources! </p>
                            <p>Frontend:</p>
                            <ul>
                                <li>Pair Programmed with Frontend and UX/UI engineers to develop fully functional components</li>
                                <li>Participated in Stakeholder meetings to present progress and receive feedback</li>
                                <li>Implemented Redux as a state management system</li>
                            </ul>
                            <p>No available website at the moment, <a target="_blank" rel="noopener noreferrer" href="https://github.com/BloomTech-Labs/coder-heroes-fe">Github</a></p>
                        </Modal>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="two">
                    <Image className='project-image' src={Ghibli}/>
                    </div>
                    <div className="project-info">
                        <div><h3>Studio Ghibli Films</h3></div>
                        <div className="project-btn">
                        <Button type="primary" onClick={showModal2}>
                            More Details
                        </Button>
                        <Modal title='Studio Ghibli Films' visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
                            <p>Description: A website to view and find information about Studio Ghibli Films.</p>
                            <p>Frontend:</p>
                            <ul>
                                <li>Retrieved data from the Ghibli API and implemented it into the application</li>
                                <li>Gave each film an information page and matched it with their ID</li>
                                <li>Made the application fully responsive to any screen size</li>
                            </ul>
                            <p>No available website at the moment, <a target="_blank" rel="noopener noreferrer" href="https://github.com/cn8817/api-practice">Github</a></p>
                        </Modal>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}