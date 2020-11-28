import {connect} from 'react-redux'
import SingleBook from './index'
import {SetIsAllowedToSendRequestAC} from '../../reducers/SearchReducer'

const mapStateToProps = (state)=>(
    {}
)

export default connect(mapStateToProps,{
    SetIsAllowedToSendRequest: SetIsAllowedToSendRequestAC
})(SingleBook)