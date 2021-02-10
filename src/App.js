import React from 'react'
import Painting from "./components/Painting";
import paintings from "./paintings.json"



const App =  () => {
    return (
      <div>
      <h1>Главный Компонент страницы</h1>
          <Painting
                url={paintings[0].url}
                title={paintings[0].title}
                price={paintings[0].price}
                tag={paintings[0].author.tag}
                authorURL={paintings[0].author.url}
                author={paintings[0].author.tag}
                quantity={paintings[0].quantity}
            />
             <Painting
                url={paintings[1].url}
                title={paintings[1].title}
                price={paintings[1].price}
                tag={paintings[1].author.tag}
                authorURL={paintings[1].author.url}
                author={paintings[1].author.tag}
                quantity={paintings[1].quantity}
          />
     </div>
  )
} 

export default App
