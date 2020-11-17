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
      {/* <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span> */}
      <span style={{ color }}>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#1f98f4",
};

export default Rating;
