import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
const Header = () =>{
    const aboutButtonRef = React.useRef(null)
    const aboutOnMouseOver = () =>{
        aboutButtonRef.current.childNodes[0].style.animation = 'navigation_about_button_mouseover 0.3s ease-in-out 0s 1 normal forwards'
    }
    const aboutOnMouseOut = () =>{
        aboutButtonRef.current.childNodes[0].style.animation = 'navigation_about_button_mouseout 0.3s ease-in-out 0s 1 normal forwards'
    }
    useEffect(()=>{
        aboutButtonRef.current.addEventListener('mouseover', aboutOnMouseOver)
        aboutButtonRef.current.addEventListener('mouseout', aboutOnMouseOut)
        return ()=>{
            aboutButtonRef.current.removeEventListener(`mouseover`, aboutOnMouseOver)
            aboutButtonRef.current.removeEventListener(`mouseout`, aboutOnMouseOut)
        }
    })
    return(
        <div className='header'>
            <div className='navigation_wrapper'>
                <div className='side_offset navigation'>
                    <h1 className='navigation_title'>
                        Google Books Search
                    </h1>
                    <NavLink to='React_Books_Search_System/about'
                        ref={aboutButtonRef}                       
                        className='navigation_about_button'
                    >
                        <div className='navigation_about_button_line'></div>
                        <h3>About</h3>
                        <p>the project</p>
                    </NavLink>
                </div>
            </div>

            <div className='header_app_description'>
                <div className='side_offset'>
                    <p>Use search systems to find the information about books, stored in <a href='https://books.google.com/'>google books database</a>
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default Header