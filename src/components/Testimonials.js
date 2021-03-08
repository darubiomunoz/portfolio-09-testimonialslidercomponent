import React from 'react';
import './styles/Testimonials.css';

import imageJohn from '../assets/images/image-john.jpg';
import imageTanya from '../assets/images/image-tanya.jpg';
import pattern1 from '../assets/images/pattern-bg.svg';
import pattern2 from '../assets/images/pattern-curve.svg';
import pattern3 from '../assets/images/pattern-quotes.svg';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <img src={pattern1} className="pattern1" alt="background pattern" aria-hidden="true" />
            <img src={pattern2} className="pattern2" alt="background pattern" aria-hidden="true" />
            <img src={pattern3} className="pattern3" alt="background pattern" aria-hidden="true" />
            <div className="card">
                <div className="card-container">
                    <img src= {imageJohn} className="card-img-top" alt="Profile photograph" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;