import React from 'react'

const BooklistLoader = (props) =>{
    return(
        <div className="loader booklist-loader" style={{display: typeof props.style === 'undefined' ? 'block' : props.style.display}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BooklistLoader