import React from 'react';

export const Artist = (props) => {
      return (
      <article className="article">
       <a className="link" href={props.albumhref} target="_blank" rel="noopener noreferrer">
        <h2 className="song-name">{props.title}</h2></a>
        <a className="link" href={props.artisthref} target="_blank" rel="noopener noreferrer">
        <p className="artist-name">{props.description}</p></a>
      </article>
    );
  }; 