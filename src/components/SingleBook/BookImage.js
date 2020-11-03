import React, {useState} from 'react'
import EmptyImageLoader from '../Loader/EmptyImageLoader'


const BookImage = (props) =>{
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const image = new Image()
    image.src= props.src
    image.onload = () =>{
        setIsImageLoaded(true)
    }
    return(
        <div className="single_book_image_wrapper">
            <EmptyImageLoader primaryStyle="single_book_image"/>
            <img style={{display: isImageLoaded ? `inline-block` : `none`}} className="single_book_image" src={props.src}/>
        </div>
    )
}

export default BookImage