import {connect} from 'react-redux'
import {getBooksThunk, getBooksAdvancedThunk} from '../thunks/redux-thunks'
import {SetBooksLoaderAC} from '../reducers/SearchReducer'

export const withProvideSearchWithStore = (Component) =>{
    const mapStateToProps = (state) =>{
        return {
            prevTitle: state.searchBranch.prevTitle,
            currentTab: state.searchBranch.currentTab
        }
    }
    return connect(mapStateToProps,{getBooksThunk, getBooksAdvancedThunk})(Component)
}

export const withProvideBooksLoaderState = (Component) =>{
    const mapStateToProps = (state) =>{
        return {
            isBooklistLoaderVisible: state.searchBranch.isBooklistLoaderVisible
        }
    }

    return connect(mapStateToProps,{
        SetBooksLoader: SetBooksLoaderAC
    })(Component)
}