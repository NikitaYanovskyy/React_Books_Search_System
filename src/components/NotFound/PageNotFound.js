import React from 'react';
import {useImage} from '../../hooks'
const PageNotFound = (props) => {
  const image = useImage(props.src)
  
  return( 
    <div className='side_offset page_not_found_wrapper'>
      <div className="page_not_found">
      <h1>{props.firstTitle}</h1>
        <h2>{props.secondTitle}</h2>
        <div className="book_card_preloader_bg">
          <img style={{display: image.isImageLoaded ? `block`: `none`}} src={image.src} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound;