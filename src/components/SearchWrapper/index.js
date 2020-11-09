import React, {useEffect} from 'react'
import ShortDescription from './ShortDescription'
import AdvancedSearch from '../AdvancedSearch'
import backgroundImage from '../../graphycs/images/book_background.jpg'
import {Route} from 'react-router-dom'
import SearchNavbarContainer from './SearchNavbar/SearchNavbarContainer'
import SimpleSearchForm from './SimpleSearchForm'
import {withProvideSearchWithStore} from '../../hocs/withHoc'
import BooklistContainer from './BooklistContainer'
import HeaderImage from '../Header/HeaderImageBlured'
import {useQuery} from '../../hooks/index'
const SearchWrapper = (props) =>{
    let query = useQuery()
    useEffect(()=>{
        if(query.get(`q`) !== null && props.match.url.includes(`simple`)){
            props.getBooksThunk(query.get(`q`), props.prevTitle)
        }
        if (query.get(`q`) !== null && props.match.url.includes(`advanced`)){
            props.getBooksAdvancedThunk(query.get(`q`), props.prevTitle)
        }
    })
    const shortDescriptionRef = React.useRef(null)
    const showDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_show 0.3s ease-in-out 0s 1 normal forwards'
    }
    const hideDescription = () =>{
        shortDescriptionRef.current.style.animation = 'short_description_hide 0.3s ease-in-out 0s 1 normal forwards'
    }

    return( 
        <React.Fragment>
            <section className='search_container'>
            <HeaderImage isBlured={false} src={backgroundImage}/>
                <div className="search_section_wrapper">
                    <div className="search_section side_offset">
                        <div className="search">
                            <SearchNavbarContainer showDescription={showDescription}/>
                            <Route path='/find/simple' component={withProvideSearchWithStore(SimpleSearchForm)} />
                            <Route exact path='/find/advanced' component={withProvideSearchWithStore(AdvancedSearch)}/>
                            
                            <BooklistContainer />
                        </div>

                        <ShortDescription 
                        shortDescriptionRef={shortDescriptionRef} 
                        hideDescription={hideDescription}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SearchWrapper