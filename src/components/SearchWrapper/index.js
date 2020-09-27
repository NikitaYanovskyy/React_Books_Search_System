import React, {useState} from 'react'
import ShortDescription from './ShortDescription'
import AdvancedSearch from './AdvancedSearch'
import backgroundImage from '../../graphycs/images/book-background.jpg'
import {Route, NavLink} from 'react-router-dom'
import SimpleSearchForm from './SimpleSearchForm'
import {withProvideSearchWithStore} from '../../hocs/withHoc'
import Booklist from './Booklist'
const SearchWrapper = () =>{
    const shortDescriptionRef = React.useRef(null)

    const showDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_show 0.3s ease-in-out 0s 1 normal forwards'

    }
    const hideDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_hide 0.3s ease-in-out 0s 1 normal forwards'
    }
    return( 
        <section className='search_container'>
            <img className='header_image' src={backgroundImage}/>
            <div className="search_section_wrapper">
                <div className="search_section side_offset">

                    <div className="search">

                        <div className='select_form_bar'>
                            <NavLink exact className='select_form_item' activeClassName='select_form_item_active' to='/React_Books_Search_System'>
                                <p>Simple</p>
                                <div className='select_form_item_line'></div>
                            </NavLink>
                            <NavLink className='select_form_item' activeClassName='select_form_item_active' to='/React_Books_Search_System/advanced'>
                                <p>Advanced</p>
                                <div className='select_form_item_line'></div>
                            </NavLink>

                            {/*Mobile show description*/}
                            <div onClick={showDescription} className='show_description_open'>
                                <p>Show description</p>
                                <i className="fa fa-question-circle"></i>
                            </div>
                            
                            {/*Absolute background*/}
                            <div className="select_form_bar_background"></div>
                        </div>

                        <Route exact path='/React_Books_Search_System' component={withProvideSearchWithStore(SimpleSearchForm)} />
                        <Route path='/React_Books_Search_System/advanced' component={withProvideSearchWithStore(AdvancedSearch)}/>

                        <Booklist />
                    </div>

                    <ShortDescription 
                    shortDescriptionRef={shortDescriptionRef} 
                    hideDescription={hideDescription}
                    />
                </div>
            </div>
        </section>
    )
}

export default SearchWrapper