import React from "react";

const Card = ({image_src, title, value, title2, value2, image_alt}) => {
  return (
    <div className="card">
      {image_src && <img className="card__image" src={image_src} alt={image_alt} />}
      <div className="card__content">
        <h4 className="card__title" >{title}</h4>
        <p className="card__value" >{value}</p>
        {title2 && (
          <h4 className="card__title2" >{title2}</h4>
        )}
        {value2 && (
          <p className="card__value2" >{value2}</p>
        )}
      </div>
      
    </div>
  )
}

export default Card;