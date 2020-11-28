import React, {useState} from 'react'
const BooklistResultAlert = (props) =>{
    const [loading, setLoadingState] = useState(true)
    const imageLoaded = () =>{
        setLoadingState(false)
    }
    return(
        <React.Fragment>
            <div className="search-alert" style={{display: loading ? 'none' : 'flex'}}>
                <img onLoad={imageLoaded} src={props.image}/>
                <h1>{props.text}</h1>
            </div>
        </React.Fragment>
    )
}
export default BooklistResultAlert
