import React from 'react'
import "../../stylesheets/allStyles.css"
const Header = () =>{
    const aboutButtonRef = React.useRef(null)
    const aboutOnMouseOver = () =>{
        aboutButtonRef.current.childNodes[0].style.animation = 'navigation_about_button_mouseover 0.3s ease-in-out 0s 1 normal forwards'
    }
    const aboutOnMouseOut = () =>{
        aboutButtonRef.current.childNodes[0].style.animation = 'navigation_about_button_mouseout 0.3s ease-in-out 0s 1 normal forwards'
    }
    return(
        <div>
            <div className='navigation_wrapper'>
                <div className='side_offset navigation'>
                    <h1 className='navigation_title'><a href="#">Google Books Search</a></h1>
                    <a  
                        ref={aboutButtonRef}
                        onMouseOver={() => aboutOnMouseOver()}
                        onMouseOut={() => aboutOnMouseOut()}  
                        href='#' 
                        className='navigation_about_button'
                    >
                        <div className='navigation_about_button_line'></div>
                        <h3>About</h3>
                        <p>the project</p>
                    </a>
                </div>
            </div>

            <div className='navigation_app_description'>
                <div className='side_offset'>
                    <p>Use search systems to find the information about books, stored in <a href='https://books.google.com/'>google books database</a>
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default Header