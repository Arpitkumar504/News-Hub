import React from 'react'
import { BsNewspaper } from 'react-icons/bs';

const Newsbanner = (props) => {
    return (
        <div className='banner'>
            <div className="bannercontent">
                <h1><BsNewspaper /> {props.name}</h1>
                <h5>{props.content}</h5>
            </div>
        </div>
    )
}

export default Newsbanner
