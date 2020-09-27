import React from 'react'

const ShortDescription = (props) =>{
    return( 
        <div ref={props.shortDescriptionRef} className="short_description_wrapper">
            <div className="short_description">
                <i onClick={props.hideDescription} className="fa fa-times short_description_close_button"></i>
                <h3>Short description</h3>
                <h4>This is an application, 
                    that gets primary data about books, 
                    which you can find on google books.
                </h4>
                <p className='short_description_text_vertical_offset'>You can not get books content. </p>
                <p>Each item contains books:</p>
                <ul>
                    <li>title</li>
                    <li>author</li>
                    <li>description</li>
                    <li>category</li>
                    <li>language</li>
                    <li>price and currency</li>
                    <li>image</li>
                    <li>avarage rating</li>
                    <li>buy link</li>
                </ul>
                <p>Simple and advanced search systems are available.</p>
            </div>
            <div className="short_description_background"></div>
        </div>
    )
}

export default ShortDescription