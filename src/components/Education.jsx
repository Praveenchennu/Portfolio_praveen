import React from 'react';
import { Container } from 'react-bootstrap';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import srkr from '../assets/img/Education/SRKR logo.png';
import narayana from '../assets/img/Education/Narayana logo.png';
import CSN from '../assets/img/Education/CSN_logo.png';


const educationData = [

    { year: "2020-24", title: "Bachelor's of Technology | ECE ", logo: srkr, description: "Pursued my Bachelor's of Technology in Electronics and Communication Engineering at SRKR Engineering College, Bhimavaram." },

    { year: "2018-20", title: "Intermediate | MPC", logo: narayana, description: "Completed my Higher Secondary Education in the MPC stream at Narayana Junior College, Bhimavaram." },

    { year: "2018", title: "High School",logo:CSN, description: "Completed my High School from Dr. CSN English Medium School, Bhimavaram." },


];

const Education = () => {
    return (
        <div className='education pt-5' id='education'>

            <Container className="education-journey pb-5 ">
                <h1 className="head pt-4 pb-4">Education</h1>
                <div className="timeline px-4">
                    {educationData.map((item, index) => (
                        <div key={index} className="timeline-item">

                            <div className="timeline-content d-flex flex-column flex-md-row mb-5 animate__animated animate__fadeIn rounded-4 border-black">
                                <div className=' d-flex align-items-center justify-content-center'>
                                    <img
                                        src={item.logo}
                                        alt={item.title || 'Logo'}
                                        style={{ width: '150px', height: '110px', objectFit: 'contain' }}
                                        className='p-2 m-auto'
                                    />
                                </div>

                                <div className='my-auto p-3'>
                                    <h4 className='fs-4 m-0 pb-1'>{item.title} <span className='year'> ({item.year})<TaskAltIcon/></span></h4>
                                    <p className='fs-6 m-0'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Education;
