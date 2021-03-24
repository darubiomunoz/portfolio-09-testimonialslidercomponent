import React, { useState, useEffect } from "react";
import "./styles/Testimonials.css";

import pattern1 from "../assets/images/pattern-bg.svg";
import pattern2 from "../assets/images/pattern-curve.svg";
import pattern3 from "../assets/images/pattern-quotes.svg";
import arrowLeft from "../assets/images/icon-prev.svg";
import arrowRight from "../assets/images/icon-next.svg";

const ComponentLogic = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [isInvisible, setIsInvisible] = useState(["", "invisible"]);

  const DATA_URL = "https://api.jsonbin.io/b/604dc26d7ffeba41c078762c";

  const fetchData = async () => {
    const response = await fetch(DATA_URL);

    if (!response.ok)
      console.error(`An error has occurred: ${response.status}`);

    const data = await response.json();
    return data;
  };

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      setData(await fetchData());
    } catch (error) {
      console.error(error);
    }
  });

  const handleClick = () => {
    if (!click) setClick(true);
    else setClick(false);
  };

  useEffect(() => {
    if (isInvisible[0] === "") setIsInvisible(["invisible", 0]);
    else setIsInvisible(["", "invisible"]);
  }, [click]);

  return { handleClick, data, isInvisible };
};

const Testimonials = () => {
  const { handleClick, data, isInvisible } = ComponentLogic();

  return (
    <div className="testimonials">
      <img
        src={pattern1}
        className="pattern1"
        alt="background pattern"
        aria-hidden="true"
        loading="lazy"
      />
      <img
        src={pattern2}
        className="pattern2"
        alt="background pattern"
        aria-hidden="true"
        loading="lazy"
      />
      <img
        src={pattern3}
        className="pattern3"
        alt="background pattern"
        aria-hidden="true"
        loading="lazy"
      />
      {data.map((data) => {
        return (
          <div
            key={data.id}
            className={`card ${
              data.id === "0" ? isInvisible[0] : isInvisible[1]
            }`}
          >
            <div className="card-container">
              <img
                src={data.image}
                className="card-img-top"
                alt="Profile photograph"
                loading="lazy"
              />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-light btn-lg left"
                  onClick={() => handleClick()}
                >
                  <img
                    className="button-arrow"
                    src={arrowLeft}
                    tabIndex="0"
                    alt="Press to show the previous testimonial"
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-lg right"
                  onClick={() => handleClick()}
                >
                  <img
                    className="button-arrow"
                    src={arrowRight}
                    alt="Press to show the next testimonial"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text" tabIndex="0">
                {data.text}
              </p>
              <div className="card-profile">
                <p className="card-name" tabIndex="0">
                  {data.name}
                </p>
                <p className="card-occupation" tabIndex="0">
                  {data.occupation}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
