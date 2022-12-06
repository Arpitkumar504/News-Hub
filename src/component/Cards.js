import React from 'react'

const Cards = (props) => {
    return (
        <div className='cards'>
            <div className="heading">
                <h1>{props.title}</h1>
            </div>
            <div className="image">
                <img src={props.image} alt="/" />
            </div>
            <div className="description">
                <h5>{props.des}</h5>
            </div>
            <div className="author">
                <p>{props.author}</p>
                <p>{props.publish}</p>
            </div>
            <a href={props.url} target="blank">
                <button type='button' className='btn'>View More</button>
            </a>
        </div>
    )
}

export default Cards
