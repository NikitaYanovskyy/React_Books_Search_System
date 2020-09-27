import React from 'react'
import {connect} from 'react-redux'
import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'

const mapStateToProps = (state) =>{
    return {
        books: state.searchBranch.books
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {}
}

const Booklist = (props) =>{
    return(
        <React.Fragment>
            <div className="booklist_container">
                {props.books.map((item)=>{
                    
                    //Set book price
                    let bookPrice;
                    switch (item.saleInfo.saleability){
                        case 'FREE':
                            bookPrice = 'Free' 
                            break
                        case 'NOT_FOR_SALE':
                            bookPrice = 'Not for sale'
                            break; 
                        case 'FOR_SALE':
                            bookPrice = `${item.saleInfo.listPrice.amount} ${item.saleInfo.listPrice.currencyCode}`
                            break;
                        default:
                            bookPrice = 'Different'
                            break;
                    }

                    //Set book photo
                    let bookPhoto;
                    if(item.volumeInfo.hasOwnProperty('imageLinks')){
                        if(item.volumeInfo.imageLinks.length === 0){
                            bookPhoto = bookMissingPhoto
                        }else{
                            bookPhoto = item.volumeInfo.imageLinks.thumbnail
                        }
                    }else{
                        bookPhoto = bookMissingPhoto
                    } 

                    //Set book category
                    let bookCategory;
                    let bookCategoryStyle = {
                        color: '#810A58'
                    };
                    if(item.volumeInfo.hasOwnProperty('categories')){
                        bookCategory = item.volumeInfo.categories
                    }else{
                        bookCategory = 'No category'
                        bookCategoryStyle.color = 'red'
                    }

                    //Set book title
                    let bookTitle = item.volumeInfo.title

                    if(bookTitle.length >= 40){
                        bookTitle = bookTitle.substring(0, 40)
                        let bookTitleLastWordIndex = bookTitle.lastIndexOf(" ")
                        bookTitle = bookTitle.substring(0, bookTitleLastWordIndex) + '...'
                    }
                    

                    return (
                        <div key={item.id} className="booklist_item_wrapper">
                            <div className="booklist_item">
                                <strong style={bookCategoryStyle} className="booklist_item_category">{bookCategory}</strong>
                                <img src={bookPhoto} alt=""/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Booklist)


