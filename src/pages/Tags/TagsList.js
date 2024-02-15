import React from 'react'
import './Tags.css'

const TagsList = ({ tag, key }) => {
    return (
        <div className='tag' key={key}>
            <h5>{tag.tagName}</h5>
            <p>{tag.tagDesc}</p>
        </div>
    )
}

export default TagsList