import React from 'react'
import EmptyImageLoader from '../Loader/EmptyImageLoader'


const HeaderImage = (props) =>{
    const image = new Image()
    image.src = props.src
    let headerImageStyles = {
            backgroundImage: `url(${props.src})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
        }
    return(
        <div className="single_book_header_image_wrapper">            
            {props.isImageLoaded 
            ? <div style={headerImageStyles} className="single_book_header_image"></div>
            : <div className="book_card_preloader_bg single_book_header_image"></div>
            } 
        </div>
    )
}

export default HeaderImage