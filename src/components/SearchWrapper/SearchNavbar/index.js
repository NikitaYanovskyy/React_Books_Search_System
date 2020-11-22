import React from 'react'

const SearchNavbar = (props) =>{

    return(
        <div className='select_form_bar'>
            <div onClick={props.showDescription} className='show_description_open'>
                <p>Show description</p>
                <i className="fa fa-question-circle"></i>
            </div>
            <div className="select_form_bar_background"></div>
        </div>
    )
}

export default SearchNavbar
