import React from 'react'

const BooklistLoader = (props) =>{
    return(
        <p style={{display: typeof props.style === 'undefined' ? 'block' : props.style.display}}>Loading...</p>
    )
}

export default BooklistLoader