import React from 'react';
import './styles/Testimonials.css';

import data from '../assets/data.json';
import pattern1 from '../assets/images/pattern-bg.svg';
import pattern2 from '../assets/images/pattern-curve.svg';
import pattern3 from '../assets/images/pattern-quotes.svg';
import arrowLeft from '../assets/images/icon-prev.svg';
import arrowRight from '../assets/images/icon-next.svg';

const ComponentLogic = () => {}

const Testimonials = () => {
/*     const { handleLoad } = ComponentLogic(); */

    return (
        <div className="testimonials">
            <img src={pattern1} className="pattern1" alt="background pattern" aria-hidden="true" />
            <img src={pattern2} className="pattern2" alt="background pattern" aria-hidden="true" />
            <img src={pattern3} className="pattern3" alt="background pattern" aria-hidden="true" />
            {data.map(data => {
                return (
                    <div key={data.id} className={data.className}>
                        <div className="card-container" >
                            <img src={data.image} className="card-img-top" alt="Profile photograph" />
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-light btn-lg left">
                                    <img className="button-arrow" src={arrowLeft} alt="Press to show the previous testimonial" />
                                </button>
                                <button type="button" className="btn btn-light btn-lg right">
                                    <img className="button-arrow" src={arrowRight} alt="Press to show the next testimonial" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{data.text}</p>
                            <p className="card-name">{data.name}</p>
                            <p className="card-occupation">{data.occupation}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Testimonials;