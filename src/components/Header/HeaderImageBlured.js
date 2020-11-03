import React from 'react'
import {useImage} from '../../hooks'

const HeaderImageBlured = (props) =>{
    const image = useImage(props.src)
    
    let headerImageStyles = {
            backgroundImage: `url(${props.src})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
        }

    const headerImageBlock = props.isBlured
    ? <div style={headerImageStyles} className="single_book_header_image"></div>
    : <img className="header_image" src={image.src} alt=""/>
    return(
        <div className="single_book_header_image_wrapper">            
            {image.isImageLoaded 
            ? headerImageBlock
            : <div className="book_card_preloader_bg single_book_header_image"></div>
            } 
        </div>
    )
}

export default HeaderImageBlured