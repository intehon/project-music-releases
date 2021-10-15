import React from 'react';

export const Albums = (props) => {
      return (
      <div className="album-container">
        <div className="overlay">
          <div className="icon-container">
            <img src="./icons/heart.svg" className="heart icon" alt="heart"></img>
            <img src="./icons/play.svg" className="play icon" alt="play"></img>
            <img src="./icons/dots.svg" className="dots icon" alt="dots"></img>
          </div>
        </div>
        <img src={props.img} className="album-image" alt="album cover" />
     </div>
    )
}