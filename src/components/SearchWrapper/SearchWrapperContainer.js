import SearchWrapper from './index'
import {compose} from 'redux'
import {withProvideSearchWithStore, withProvideAdvancedSearchWithStore} from '../../hocs/withHoc'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
const mapStateToProps = (state) =>(
    {
        currentPaginationPage: state.searchBranch.currentPaginationPage,
        booksTotalItems: state.searchBranch.booksTotalItems
    }
)
export default compose(
    connect(mapStateToProps,{}),
    withProvideAdvancedSearchWithStore,
    withProvideSearchWithStore,
    withRouter
)(SearchWrapper)