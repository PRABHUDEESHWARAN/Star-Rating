import React from "react";
import { FaStar } from "react-icons/fa";
import "./star.css";
import { useState } from "react";

const Star = ({ NoOfStars = 5 }) => {
  const [Rating, setRating] = useState(null);
  const [Hover, setHover] = useState(null);
  function handleClick(index) {
    setRating(index);
  }
  function handleMouseEnter(index) {
    console.log(index);
    setHover(index);
  }
  function handleMouseLeave() {
    console.log("left");
    setHover(Rating);
  }

  const arr = [...Array(NoOfStars)];
  return (
    <>
      <div className="context">
        <h2>Give Star Rating!!!</h2>
      </div>
      <div className="Star">
        {arr.map((_, index) => {
          index++;
          return (
            <FaStar
              size={50}
              key={index}
              className={
                index <= Rating || index <= Hover ? "active" : "inactive"
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>
    </>
  );
};

export default Star;
