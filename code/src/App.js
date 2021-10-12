import React from 'react'
import data from './data.json'

import { Artist } from './components/Artists';

console.log(data)

const items = data.albums.items.slice(0, 8);

console.log('items', items)


export const App = () => {
  return (
  
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">New albums &amp; singles</h1>
      </div>
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
    
  )
}
