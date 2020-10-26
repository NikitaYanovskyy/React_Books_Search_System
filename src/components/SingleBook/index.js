import React, {useEffect, useRef, useState} from 'react'
import SearchAPI from '../../api/SearchAPI'

import EmptyImageLoader from '../Loader/EmptyImageLoader'

import bookMissingPhoto from '../../graphycs/images/book_photo_missing_small.jpg'

//Responce processing methods
import {processImage} from '../../api/responceProcessing'
import {processCategory} from '../../api/responceProcessing'
import {processTitle} from '../../api/responceProcessing'
import {processPrice} from '../../api/responceProcessing'


const SingleBook = (props) =>{
    const [book, setBook] = useState(null)
    const isHeaderImageLoaded = useRef(false)
    const isBookImageLoaded = useRef(false)

    const headerImageStyles = {
        backgroundImage: `url(${processImage(book.data.volumeInfo, bookMissingPhoto)})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
    }
    useEffect(()=>{
            async function FetchData(){
                const responce = await SearchAPI.getSingleBook(props.match.params.bookId)
                setBook(responce)
            }
            FetchData()
    }, [props.match.params.bookId])

    let SingleBook = null;
    if(book !== null){
        SingleBook =  <div>
            <div className="single_book_header_image_wrapper">
                <div style={headerImageStyles} className="single_book_header_image"></div>
            </div>
            <div className="side_offset">

            </div>
        </div>
    }else{
        SingleBook = <div>we</div>
    }
    
    return(
        <div>{SingleBook}</div>
    )
}  

export default SingleBook