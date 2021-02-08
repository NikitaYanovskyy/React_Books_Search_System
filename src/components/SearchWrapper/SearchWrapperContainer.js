import SearchWrapper from './index'
import {compose} from 'redux'
import {withProvideSearchWithStore} from '../../hocs/withHoc'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = (state)=>(
    {
        isAllowedToSendRequest: state.searchBranch.isAllowedToSendRequest,
        savedFilter: state.searchBranch.savedFilter
    }
)

export default compose(
    connect(mapStateToProps,{}),
    withProvideSearchWithStore,
    withRouter
)(SearchWrapper)