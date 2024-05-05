import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <div>
        <img src={item.image} alt={item.title} className="image"></img>
      </div>
      <div>
        <h5>{item.title}</h5>
      </div>
    </div>
  );
}
