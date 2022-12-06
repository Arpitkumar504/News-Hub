import React from 'react'
import Fetchdata from '../component/Fetchdata'
import Newsbanner from '../component/Newsbanner'

const Home = () => {
    return (
        <div>
            <Newsbanner name="News Hub" content="THE WEBSITE BUILD WITH THE NEWS API" />
            <Fetchdata />
        </div>
    )
}

export default Home
