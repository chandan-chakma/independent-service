import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../../Images/social/facebook.png';
import instagram from '../../../Images/social/instagram.png';

const Footer = () => {
    return (
        <footer className='p-5 mt-5 bg-dark text-white'>
            <div className='ps-5'>
                <h1 className='fs-4'>About Us</h1>
                <p className='fs-6'>Hi! We are travel guider in bd.We are help you to visit beautiful places in bangladesh.You can book now</p>
                <Link to='/services'><button className='btn btn-primary '>Book Now</button></Link>


            </div>

            <div className='ps-5'>
                <h1 className='fs-4 text-primary'>Contact Info</h1>
                <p>Email : cchakma19@gmail.com</p>
                <p>Phone: 01344555</p>

            </div>

            {/* <div>
                <h1 className='fs-4'>Be Social</h1>
                <div>
                    <img src={facebook} alt="" />
                </div>
                <div>
                    <img src={instagram} alt="" />
                </div>



            </div> */}


        </footer>
    );
};

export default Footer;