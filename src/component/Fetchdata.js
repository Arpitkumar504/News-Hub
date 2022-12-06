import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cards from './Cards';

const Fetchdata = (props) => {
    const [data, setdata] = useState([]);
    const getdata = async () => {
        const res = await axios.get(props.cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=cf6fe3b93c92496093a50186cbe00b49` : "https://newsapi.org/v2/top-headlines?country=in&apiKey=cf6fe3b93c92496093a50186cbe00b49");
        setdata(res.data.articles);
    }
    useEffect(() => {
        getdata();
    }, [props.cat])
    return (
        <div>
            <h1 className='headlines'>Top Headlines</h1>
            <div className="newscontent">
                {
                    data.map(element => {
                        const { title, description, urlToImage, author, publishedAt, url } = element;
                        return (
                            <Cards
                                title={title}
                                des={description.slice(0, 100)}
                                author={author == null ? "Unknown" : author}
                                image={urlToImage}
                                url={url}
                                publish={publishedAt.slice(0, 10)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Fetchdata
