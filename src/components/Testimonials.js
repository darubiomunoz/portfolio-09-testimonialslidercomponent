import React, { useState, useEffect } from 'react';
import './styles/Testimonials.css';

import data from '../assets/data.json';
import pattern1 from '../assets/images/pattern-bg.svg';
import pattern2 from '../assets/images/pattern-curve.svg';
import pattern3 from '../assets/images/pattern-quotes.svg';
import arrowLeft from '../assets/images/icon-prev.svg';
import arrowRight from '../assets/images/icon-next.svg';

const ComponentLogic = () => {
    const [ click, setClick ] = useState(false);
    const [ id, setId ] = useState([0]);
    
    const handleClick = () => {
        debugger;
        if(!click) setClick(true);
        else setClick(false);
    }

    useEffect(() => {
        if(id.includes(0)) setId([1]);
        else setId([0]);
    }, [click])

    return { handleClick, id, click };
}

const Testimonials = () => {
    const { handleClick, id, click } = ComponentLogic();

    return (
        <div className="testimonials">
            <img src={pattern1} className="pattern1" alt="background pattern" aria-hidden="true" loading="lazy" />
            <img src={pattern2} className="pattern2" alt="background pattern" aria-hidden="true" loading="lazy" />
            <img src={pattern3} className="pattern3" alt="background pattern" aria-hidden="true" loading="lazy" />
            {data.map(data => {
                return (
                    <div key={data.id} className={`card ${(data.id === '0'? '' : 'invisible') || (id.includes(0) ? 'invisible' : '')}`}>
                        <div className="card-container" >
                            <img src={data.image} className="card-img-top" alt="Profile photograph" loading="lazy" />
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-light btn-lg left" onClick={() => handleClick()}>
                                    <img className="button-arrow" src={arrowLeft} tabIndex="0" alt="Press to show the previous testimonial" loading="lazy" />
                                </button>
                                <button type="button" className="btn btn-light btn-lg right" onClick={() => handleClick()}>
                                    <img className="button-arrow" src={arrowRight} alt="Press to show the next testimonial" loading="lazy" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text" tabIndex="0">{data.text}</p>
                            <div className="card-profile">
                                <p className="card-name" tabIndex="0">{data.name}</p>
                                <p className="card-occupation" tabIndex="0">{data.occupation}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Testimonials;