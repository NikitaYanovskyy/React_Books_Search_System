import React, {useEffect, useRef, useState} from 'react'
import SearchAPI from '../../api/SearchAPI'
import 'font-awesome/css/font-awesome.min.css'
import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'
import notFoundImage from '../../graphycs/images/not-found.jpg'
import {BookTextContent} from './BookTextContent'
import BookImage from './BookImage'
import HeaderImage from '../Header/HeaderImage'
import PageNotFound from '../NotFound/PageNotFound'
import {BookTextContentLoader} from '../Loader/BookTextContentLoader'
//Responce processing methods
import {processImage} from '../../api/responseProcessing'
//Scroll to top when page is opened

import {useHistory} from 'react-router-dom'


const Book = (props) =>{
    const [book, setBook] = useState(null)
    const [isResponceSuccessful, setIsResponceSuccessful] = useState(true)
    const [isImageLoaded, setImageLoaded] = useState(false)
    let history = useHistory()

    useEffect(()=>{
        const FetchData = async() =>{
            try{
                const response = await SearchAPI.getSingleBook(props.match.params.bookId)
                setBook(response)
            }catch(error){
                setIsResponceSuccessful(false)
            }
        }
        FetchData()

    }, [props.match.params.bookId])

    // Books image processing
    const bookImage = new Image()
    if(book !== null){
        bookImage.src = processImage(book.data.volumeInfo, bookMissingPhoto)
        bookImage.onload = () =>{
            setImageLoaded(true)
        }
    }else{
        bookImage.src = ""
    }


    if(!isResponceSuccessful) return <PageNotFound firstTitle="Book" secondTitle="Is not found" src={notFoundImage}/>
    return(
        <div>
            <HeaderImage isImageLoaded={isImageLoaded} src={bookImage.src}/>
            <div className="side_offset">
                <div className="book_content_wrapper">
                    <button onClick={()=>{history.goBack()}} className="single_book_back_button"><i className="fa fa-arrow-left"></i>Back</button>
                    <div className="single_book_card">
                        <BookImage src={bookImage.src} isImageLoaded={isImageLoaded} />
                        {book === null 
                        ? <BookTextContentLoader /> 
                        : <BookTextContent volumeInfo={book.data.volumeInfo} saleInfo={book.data.saleInfo} />
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Book