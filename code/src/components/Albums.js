import React from 'react';

export const Albums = (props) => {
      return (
      <article className="album-container">
        <div className="overlay">
          <div className="icon-container">
            <img src="./icons/heart.svg" className="icon"></img>
            <img src="./icons/play.svg" className="icon-big"></img>
            <img src="./icons/dots.svg" className="icon"></img>
          </div>
        </div>
     </article>
    )
}