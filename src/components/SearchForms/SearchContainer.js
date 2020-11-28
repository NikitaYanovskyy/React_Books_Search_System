import {connect} from 'react-redux'
import {SetIsAllowedToSendRequestAC} from '../../reducers/SearchReducer'
import Search from './index'
const mapStateToProps = (state)=>(
    {
        isAllowedToSendRequest: state.searchBranch.isAllowedToSendRequest
    }
)

export default connect(mapStateToProps,
    {
        SetIsAllowedToSendRequest: SetIsAllowedToSendRequestAC
    }
    )(Search)