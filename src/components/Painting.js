import React from 'react'

const Painting = (props) => {
    return (
        <div>
            <img src={props.url}
                alt={props.title}
                width="300px" />
            <p>{props.title}</p>
            <p>Автор: <a href={ props.authorURL} > { props.tag}</a>
            </p>
            <p>Цена: {props.price} грн.</p>
            <button>Добавить в корзину</button>
        </div>
    )
}

export default Painting