import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner/banner1.png';
import banner2 from '../../Images/banner/banner2.png';
import banner3 from '../../Images/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Sajek Valley</h3>
                    <p>Sajek valley is known for its natural environment and is surrounded by mountains.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Cox'sBazar</h3>
                    <p>It is famous mostly for its long natural sandy beach.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Sorno Mondir</h3>
                    <p>The first thing that will amaze the tourists visiting Buddha Dhatu Jadi is the elegant stairways which lead up to the temple. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;