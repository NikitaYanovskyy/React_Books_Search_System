import React from 'react'
import EmptyImageLoader from '../Loader/EmptyImageLoader'


const BookImage = (props) =>{
    return(
        <div className="single_book_image_wrapper">
            <EmptyImageLoader primaryStyle="single_book_image"/>
            <img style={{display: props.isImageLoaded ? `inline-block` : `none`}} className="single_book_image" src={props.src}/>
        </div>
    )
}

export default BookImage