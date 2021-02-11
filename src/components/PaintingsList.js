import React from 'react'
import Painting from "./Painting";


const PaintingsList = ({ item }) => {
  return  <ul>
          {item.map(painting => 
           <li key={painting.id}>
              <Painting
                url={painting.url}
                title={painting.title}
                price={painting.price}
                tag={painting.author.tag}
                authorURL={painting.author.url}
                author={painting.author.tag}
              quantity={painting.quantity}
              />
              </li>
          )}
    </ul>
}

export default PaintingsList