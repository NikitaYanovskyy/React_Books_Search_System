import React from 'react'
// A missing photo in case if a book item will have no photo
import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'
// Loader
import BookslistLoader from '../Loader/BookslistLoader'
// Alert and it's photos
import {BooklistResultAlertContainer} from './BooklistResultAlertsContainer'
import noResults from '../../graphycs/images/noResults.jpg'
import firstVisit from '../../graphycs/images/firstVisit.jpg'

import BookCard from './BookCard/BookCard'
//Response processing methods
import {processImage, processCategory, processTitle, processPrice} from '../../api/responseProcessing'


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
                    //Book id

                    return (
                        <div key={item.id} className="booklist_item_wrapper" style={{display: props.isBooklistLoaderVisible ? 'none' : 'block'}}>
                            <BookCard 
                                bookCategory={processCategory(item.volumeInfo)}
                                bookId={item.id}
                                bookPhoto={processImage(item.volumeInfo, bookMissingPhoto)}
                                bookTitle={processTitle(item.volumeInfo.title)}
                                bookAuthors={item.volumeInfo.authors}
                                bookPrice={processPrice(item.saleInfo)}
                            />
                        </div>
                    )
                })}
            </div>
            </React.Fragment>
        ) 
    } 
    
}

export default Booklist

