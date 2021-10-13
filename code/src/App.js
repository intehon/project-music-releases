import React from 'react'
import data from './data.json'

import { Artist } from './components/Artists';
import { Header } from './components/Header';
import { Overlay } from './components/Overlay';
// import { Album } from './components/Album';
{/*should we add header component?*/}

console.log(data)

const items = data.albums.items.slice(0, 8);

console.log('items', items)


export const App = () => {
  return (
    <>
    <div className="container">
      <Header />
      <div className="article-container">
        
       {items.map((item) => {
          return (
            <Artist
              img={item.images[1].url}
              title={item.name}
              description={item.artists[0].name}
            />
          );
        })}
     </div>
   </div>
    </>
  )
}

// import React from 'react';
// import data from './data.json';

// import Article from './components/Article';
// import Header from './components/Header';

// export const App = () => {
// 	return (
// 		<>
// 			<Header />
// 			{data.map((article) => (
// 				<Article
// 					key={article.id}
// 					title={article.title}
// 					description={article.description}
// 					publishDate={article.publishDate}
// 					img={article.imageUrl}
// 					tags={article.tags}
// 				/>
// 			))}
// 		</>
// 	);
// };
