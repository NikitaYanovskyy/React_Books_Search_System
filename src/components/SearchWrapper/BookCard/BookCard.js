import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const BookCard = (props) =>{
    const bookCategoryColor = props.bookCategory === 'No category' ? `red` : '#5a0f0f'
    return(
        <div className="booklist_item">
            <strong style={{color: bookCategoryColor}} className="booklist_item_category">{props.bookCategory}</strong>
            <NavLink to={'/books/' + props.bookId}>
                <BookCardImage src={props.bookPhoto}/>
            </NavLink>
            <h4 className="booklist_item_title">{props.bookTitle}</h4>
            <h5 className="booklist_item_authors">{props.bookAuthors}</h5>
            <hr className="booklist_item_line"/>
            <strong className="booklist_item_price">{props.bookPrice}</strong>
        </div>
    )
}


const BookCardImage = (props) =>{
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const image = new Image()
    image.src= props.src
    image.onload = () =>{
        setIsImageLoaded(true)
    }  

    const emptyImageStyles = {
        height: `200px`
        
    }

    const imageView = isImageLoaded 
    ? <img className="booklist_item_image" src={props.src}/>
    : <div className="book_card_preloader_bg" style={{height: emptyImageStyles.height}}></div>

    return(
        <React.Fragment>
            {imageView}
        </React.Fragment>
    )
}

export default BookCard