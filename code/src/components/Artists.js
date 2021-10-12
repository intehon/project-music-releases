import React from 'react';

export const Artist = (props) => {
    console.log(props);
    return (
      <article className="article">
          <div className="icon-container"> 
          <img src="{dots}" alt="image of heart" />
          <img src="" alt="play icon" />
          <img src="" alt="dots icon" />
          </div>
        <img src={props.img} class="album-image" alt="spring view" />
        <h2 className="song-name">{props.title}</h2>
        <p className="artist-name">{props.description}</p>
      </article>
    );
  }; 