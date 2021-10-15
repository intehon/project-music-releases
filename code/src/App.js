import React from 'react'
import data from './data.json'

import { Artist } from './components/Artists';
import { Header } from './components/Header';
import { Albums } from './components/Albums';

const items = data.albums.items

console.log('ITEMS', items)

export const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="article-container">
       {items.map((item) => {
          return (
            <>
            <div className="article-unit">
            <div className="album-container">
              {/* <Overlay /> */}
            <Albums
              img={item.images[1].url}
              />
              </div>
            <Artist
              // img={item.images[1].url}
              artisthref={item.artists[0].external_urls.spotify}
              albumhref={item.external_urls.spotify}
              title={item.name}
              description={item.artists[0].name}
            />
            </div>
            </>
          );
        })}
     </div>
   </div>
  )
}
