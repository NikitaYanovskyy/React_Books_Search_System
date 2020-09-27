import React from 'react'
import noResults from '../../graphycs/images/noResults.jpg'
import firstVisit from '../../graphycs/images/firstVisit.jpg'

export const BooksUnfoundAlert = () =>{
    return (
        <div className="search-alert">
            <img src={noResults}/>
            <h1>No results</h1>
        </div>
    )
}

export const BooksFirstVisit = () =>{
    return (
        <div className="search-alert">
            <img src={firstVisit}/>
            <h1>Start searching!</h1>
        </div>
    )
}