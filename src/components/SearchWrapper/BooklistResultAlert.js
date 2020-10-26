import React, {useState} from 'react'
import BookslistLoader from '../Loader/BookslistLoader'
const BooklistResultAlert = (props) =>{
    const [loading, setLoadingState] = useState(true)
    const imageLoaded = () =>{
        setLoadingState(false)
    }
    return(
        <React.Fragment>
            <BookslistLoader style={{display: loading ? 'block' : 'none'}} />
            <div className="search-alert" style={{display: loading ? 'none' : 'flex'}}>
                <img onLoad={imageLoaded} src={props.image}/>
                <h1>{props.text}</h1>
            </div>
        </React.Fragment>
    )
}
export default BooklistResultAlert
