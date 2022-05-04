import React from 'react';
import myPhoto from '../../Images/about/me.png';
import './About.css'

const About = () => {
    return (
        <div className='container mt-5 ' id='about'>
            <div id='aboutme'>
                <div>
                    <img id='myphoto' src={myPhoto} alt="" />

                </div>

                <div>
                    <h1>About Me</h1>
                    <p className='fs-3'>I am a junior web Developer.</p>

                </div>
            </div>

            <div className='container mt-4' id='mygoal'>
                <h1 className='text-primary text-center fs-1'>My Goal</h1>
                <p className='fs-5 m-3'>My goal as a developer is to further
                    improve my knowledge about web development and become a senior web developer.Earn money and travel all around the world.

                </p>

            </div>


        </div>
    );
};

export default About;