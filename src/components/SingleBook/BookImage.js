import React from 'react'
import EmptyImageLoader from '../Loader/EmptyImageLoader'
import {useImage} from '../../hooks'

const BookImage = (props) =>{
    const image = useImage(props.src)

    return(
        <div className="single_book_image_wrapper">
            <EmptyImageLoader primaryStyle="single_book_image"/>
            <img style={{display: image.isImageLoaded ? `inline-block` : `none`}} className="single_book_image" src={image.src}/>
        </div>
    )
}

export default BookImage