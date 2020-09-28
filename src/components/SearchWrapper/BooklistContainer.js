import {connect} from 'react-redux'
import Booklist from './Booklist'
import {SetBooksLoaderAC} from '../../reducers/SearchReducer'

const mapStateToProps = (state) =>{
    return {
        books: state.searchBranch.books,
        booksTotalItems: state.searchBranch.booksTotalItems,
        isBooklistLoaderVisible: state.searchBranch.isBooklistLoaderVisible
    }
}

export default connect(mapStateToProps, {
    toggleLoader: SetBooksLoaderAC
})(Booklist)
