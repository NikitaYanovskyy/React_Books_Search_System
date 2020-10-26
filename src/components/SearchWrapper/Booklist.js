import React from 'react'
// A missing photo in case if a book item will have no photo
import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'
// Loader
import BookslistLoader from '../Loader/BookslistLoader'
// Alert and it's photos
import {BooklistResultAlertContainer} from './BooklistResultAlertsContainer'
import noResults from '../../graphycs/images/noResults.jpg'
import firstVisit from '../../graphycs/images/firstVisit.jpg'
import {NavLink} from 'react-router-dom'

//Responce processing methods
import {processImage} from '../../api/responceProcessing'
import {processCategory} from '../../api/responceProcessing'
import {processTitle} from '../../api/responceProcessing'
import {processPrice} from '../../api/responceProcessing'

const Booklist = (props) =>{
    if(props.isBooklistLoaderVisible){
        return <BookslistLoader/>
    }
    if(props.booksTotalItems === -1){
        return <BooklistResultAlertContainer image={firstVisit} text={'Start searching!'}/>
    }
    if(props.booksTotalItems === 0){
        return <BooklistResultAlertContainer image={noResults} text={'No results'}/>
    }
    if(props.booksTotalItems > 0){
        return(
            <React.Fragment>
            <div className="booklist_container">
                {
                props.books.map((item)=>{
                    let bookId = item.id;

                    //Set book price
                    let bookPriceAmount =  typeof item.saleInfo.listPrice !== `undefined` 
                    ? item.saleInfo.listPrice.amount 
                    : ""
                    let bookPriceCurrencyCode =  typeof item.saleInfo.listPrice !== `undefined` 
                    ? item.saleInfo.listPrice.currencyCode 
                    : ""
                    let bookPrice = processPrice(
                        item.saleInfo.saleability, 
                        bookPriceAmount, 
                        bookPriceCurrencyCode
                        );
                    
                    //Set book image
                    let bookPhoto = processImage(item.volumeInfo, bookMissingPhoto);

                    //Set book category
                    let bookCategory = processCategory(item.volumeInfo);
                    let bookCategoryStyle = {
                        color: '#5a0f0f'
                    };
                    if(bookCategory === 'No category'){
                        bookCategoryStyle.color = 'red'
                    }

                    //Set book title
                    let bookTitle = processTitle(item.volumeInfo.title)

                    
                    return (
                        <div key={item.id} className="booklist_item_wrapper" style={{display: props.isBooklistLoaderVisible ? 'none' : 'block'}}>
                            <div className="booklist_item">
                                <strong style={bookCategoryStyle} className="booklist_item_category">{bookCategory}</strong>
                                <NavLink to={'/books/' + bookId}>
                                    <img className="booklist_item_image" src={bookPhoto}/>
                                </NavLink>
                                <h4 className="booklist_item_title">{bookTitle}</h4>
                                <h5 className="booklist_item_authors">{item.volumeInfo.authors}</h5>
                                <hr className="booklist_item_line"/>
                                <strong className="booklist_item_price">{bookPrice}</strong>
                            </div>
                        </div>
                    )
                })}
            </div>
            </React.Fragment>
        ) 
    } 
    
}

export default Booklist

