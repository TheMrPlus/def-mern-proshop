import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[...Array(5).keys()].map((el) =>
        el + 1 <= value ? (
          <span key={el} className="material-icons" style={{ color }}>
            star
          </span>
        ) : value % 1 !== 0 && el + 1 === Math.ceil(value) ? (
          <span key={el} className="material-icons" style={{ color }}>
            star_half
          </span>
        ) : (
          <span key={el} className="material-icons" style={{ color }}>
            star_outline
          </span>
        )
      )}
      <span style={{ color }}>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#4b59f7",
};

export default Rating;
