import React, {useEffect} from 'react'
import ShortDescription from './ShortDescription'
import AdvancedSearch from '../SearchForms/AdvancedSearch/index'
import backgroundImage from '../../graphycs/images/book_background.jpg'
import {Route} from 'react-router-dom'
import SearchNavbarContainer from './SearchNavbar/SearchNavbarContainer'
import SimpleSearchForm from '../SearchForms/SimpleSearch/SimpleSearchForm'
import {withProvideSearchWithStore, withProvideAdvancedSearchWithStore} from '../../hocs/withHoc'
import BooklistContainer from './BooklistContainer'
import HeaderImage from '../Header/HeaderImageBlured'
import {useQuery} from '../../hooks/index'
import {setQueryParam} from '../../api/responseProcessing'
import {useLocation} from 'react-router-dom'

const SearchWrapper = (props) =>{
    let query = useQuery()
    const location = useLocation()
    const shortDescriptionRef = React.useRef(null)
    let queryParams = {}
    queryParams.currentPaginationPage = props.currentPaginationPage
    useEffect(()=>{
        queryParams.title = setQueryParam(query.get(`q`))
        if(props.match.url.includes(`simple`) && location.search !== ""){
            props.getBooksThunk(queryParams)
        }
        if(props.match.url.includes(`advanced`) && location.search !== ""){
            queryParams.author = setQueryParam(query.get(`author`))
            queryParams.filter = setQueryParam(query.get(`filter`))
            queryParams.newestBook = setQueryParam(query.get(`newestBook`))
            props.getBooksAdvancedThunk(queryParams)
        }
    })

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
                            <Route path='/find/advanced' component={withProvideAdvancedSearchWithStore(AdvancedSearch)}/>

                            <BooklistContainer queryParams={queryParams}/>
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