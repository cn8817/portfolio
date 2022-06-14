import React, {useState} from "react";
import { Modal, Button, Image } from 'antd';
import "antd/dist/antd.css";
import Potluck from '../../Assets/Potluck.png'
import Market from '../../Assets/Market.png'
import Ghibli from '../../Assets/ghibli.png'
import ecom from '../../Assets/ecom.png'

export default function ProjectModals() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData] = useState([])
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    // const handleClick = (project) => {
    //     setModalData(project)
    //     showModal
    // }
    const ProjectsData = [
        {
            image : {Ghibli},
            title: 'Studio Ghibli Films',
            description: 'A website to view and find information about Studio Ghibli Films.',
            role : 'Frontend',
            responsibilities : ['Retrieved data from the Ghibli API and implemented it into the application', 'Gave each film an information page and matched it with their ID', 'Made the application fully responsive to any screen size'],
            github: 'https://github.com/cn8817/api-practice'
        },
        {
            image : {Potluck},
            title: 'Potluck Planner',
            description: 'Create and invite users to a potluck. Manage items, time, date, location, and attendees as an organizer. Accept or decline invites and manage attending potlucks as a user.',
            role : 'Backend',
            responsibilities : ['Created authentication with JSON web tokens', 'Made backend endpoints for HTTP requests on the client side', 'Used PostgreSQL to create databases, table schemas, migration, and seed scripts'],
            github: 'https://github.com/Build-Week-Potluck-Planner-5/front-end'
        },
    ]
    return(
        <>
        {ProjectsData.map(project => (
        <div className="project-container" id='projects'>
            <h1 className="project-h1">Projects</h1>
            <div className="project-wrap">

            <div className="project-card">
                    <div className="two">
                    <Image className='project-image' src={Ghibli}/>
                    </div>
                    <div className="project-info">
                        <div><h3>{project.title}</h3></div>
                        <div className="project-btn">
                        <Button type="primary" onClick={() => {
                            setModalData(project)
                            showModal()
                            }}>
                            More Details
                        </Button>
                         <Modal title={modalData.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p>Description: {modalData.description}</p>
                            <p>{modalData.role}:</p>
                            {/* <ul>{modalData.responsibilities.map(res => {
                                <li>{res}</li>
                            })}
                            </ul> */}
                            <p><a target="_blank" rel="noopener noreferrer" href={modalData.github}>Github</a></p>
                        </Modal>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        ))}
        </>
    )
}