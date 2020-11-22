import React from 'react'
import {connect} from 'react-redux'
import {getBooksAdvancedThunk} from '../../../thunks/redux-thunks'

//Paginagion
import {paginationItemsAmount, maxResults} from '../../../api/SearchAPI'
import Pagination from "react-js-pagination";
import 'font-awesome/css/font-awesome.min.css';

const mapStateToProps = (state) =>(
    {
        currentPaginationPage: state.searchBranch.currentPaginationPage,
        booksTotalItems: state.searchBranch.booksTotalItems
    }
)


const BooksPaginationContainer = (props)=>{

    const onPaginationItemChange = (page)=>{
        props.queryParams.currentPaginationPage = page ? page : props.currentPaginationPage
        props.getBooksAdvancedThunk(props.queryParams)
    }
    const paginationUlStyle = props.booksTotalItems <= -1 ? "pagination_ul pagination_hidden" : "pagination_ul"
    return(
        <Pagination
            activePage={props.currentPaginationPage}
            itemsCountPerPage={maxResults}
            totalItemsCount={props.booksTotalItems}
            pageRangeDisplayed={paginationItemsAmount}
            onChange={onPaginationItemChange}
            itemClass="pagination_li"
            innerClass={paginationUlStyle}
            activeClass="pagination_li_active"
            hideNavigation={true}
            firstPageText={<i className="fa fa-angle-double-left"></i>}
            lastPageText={<i className="fa fa-angle-double-right"></i>}
        />
    )
}

export default connect(mapStateToProps,{getBooksAdvancedThunk})(BooksPaginationContainer) 