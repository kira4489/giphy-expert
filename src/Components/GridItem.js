import React from 'react'
import "../Css/GifGrid.css"

export const GridItem = ({title,url}) => {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
