import React from 'react';

export const Artist = (props) => {
      return (
      <article className="article">
        <div className="overlay">
         <div className="icon-container">
           <img src="./icons/heart.svg" className="icon"></img>
           <img src="./icons/play.svg" className="icon-big"></img>
           <img src="./icons/dots.svg" className="icon"></img>
        </div>
       </div>
         <img src={props.img} class="album-image" alt="spring view" />
         <h2 className="song-name">{props.title}</h2>
         <p className="artist-name">{props.description}</p>
      </article>
    );
  }; 

// import React from 'react';
// import Tag from './Tag';

// const Article = (props) => {
// 	// console.log('PROPS', props);

// 	return (
// 		<article className="article">
// 			<h2>{props.title}</h2>
// 			<p>{props.description}</p>
// 			<p>Date of publish: {new Date(props.publishDate).toDateString()}</p>
// 			<img src={props.img} alt="Spring view" />
// 			<div className="article-tag-container">
// 				{props.tags.map((tag) => (
// 					<Tag key={tag} tagName={tag} />
// 				))}
// 			</div>
// 		</article>
// 	);
// };

// export default Article;
