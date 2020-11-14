import {connect} from 'react-redux'
import {getBooksThunk, getBooksAdvancedThunk} from '../thunks/redux-thunks'
import {SetBooksLoaderAC} from '../reducers/SearchReducer'

export const withProvideSearchWithStore = (Component) =>{
    const mapStateToProps = (state) =>{
        return {
            savedTitle: state.searchBranch.savedTitle,
            currentTab: state.searchBranch.currentTab
        }
    }
    return connect(mapStateToProps,{getBooksThunk})(Component)
}

export const withProvideAdvancedSearchWithStore = (Component) =>{
    const mapStateToProps = (state) =>{
        return {
            savedTitle: state.searchBranch.savedTitle,
            savedAuthor: state.searchBranch.savedAuthor,
            savedFilter: state.searchBranch.savedFilter,
            savedIsNewest: state.searchBranch.savedIsNewest,
            currentTab: state.searchBranch.currentTab
        }
    }
    return connect(mapStateToProps,{getBooksAdvancedThunk})(Component)
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