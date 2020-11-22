import {connect} from 'react-redux'
import Booklist from './Booklist'
import {SetBooksLoaderAC} from '../../reducers/SearchReducer'
import { withRouter } from 'react-router-dom'
import {compose} from 'redux'
import {withProvideAdvancedSearchWithStore} from '../../hocs/withHoc'
import {getBooksAdvancedThunk} from '../../thunks/redux-thunks'
const mapStateToProps = (state) =>{
    return {
        books: state.searchBranch.books,
        booksTotalItems: state.searchBranch.booksTotalItems,
        isBooklistLoaderVisible: state.searchBranch.isBooklistLoaderVisible,
    }
}
export default compose(
    withProvideAdvancedSearchWithStore,
    withRouter,
    connect(mapStateToProps, {
        SetBooksLoader: SetBooksLoaderAC,
        getBooksAdvancedThunk
    })
)(Booklist)
