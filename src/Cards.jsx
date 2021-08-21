import React from "react";

function Card(props) {
  // console.log(props);
  return (
    <>
    <div className="container">
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link}>
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
