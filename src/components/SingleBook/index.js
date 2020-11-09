import React, {useEffect, useRef, useState} from 'react'
import SearchAPI from '../../api/SearchAPI'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'
import notFoundImage from '../../graphycs/images/not-found.jpg'
import {BookTextContent} from './BookTextContent'
import BookImage from './BookImage'
import HeaderImage from '../Header/HeaderImageBlured'
import PageNotFound from '../NotFound/PageNotFound'
import {BookTextContentLoader} from '../Loader/BookTextContentLoader'
//Responce processing methods
import {processImage} from '../../api/responseProcessing'
//Scroll to top when page is opened

import {useHistory} from 'react-router-dom'


const Book = (props) =>{
    const [book, setBook] = useState(null)
    const [isResponceSuccessful, setIsResponceSuccessful] = useState(true)
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

    const imageSrc = book !== null ? processImage(book.data.volumeInfo, bookMissingPhoto) : ""

    if(!isResponceSuccessful) return <PageNotFound firstTitle="Book" secondTitle="Is not found" src={notFoundImage}/>
    return(
        <div>
            <HeaderImage isBlured={true} src={imageSrc}/>
            <div className="side_offset">
                <div className="book_content_wrapper">
                    <button onClick={()=>{history.goBack()}} className="single_book_back_button"><i className="fa fa-arrow-left"></i>Back</button>
                    <div className="single_book_card">
                        <BookImage src={imageSrc} />
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