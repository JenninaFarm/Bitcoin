import React from "react";

const Card = ({image_src, title, value}) => {
  return (
    <div className="card">
      {image_src && <img className="card__image" src={image_src}/>}
      <div className="card__content">
        <h4 className="card__title" >{title}</h4>
        <p className="card__value" >{value}</p>
      </div>
      
    </div>
  )
}

export default Card;