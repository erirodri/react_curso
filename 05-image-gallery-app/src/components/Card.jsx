import React from "react";

const Card = ({ img }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="png" />
    </div>
  );
};

export default Card;
