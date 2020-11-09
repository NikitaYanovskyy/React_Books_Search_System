import {SetCurrentTabAC} from '../../../reducers/SearchReducer'
import {withProvideSearchWithStore} from '../../../hocs/withHoc'
import {compose} from 'redux'
import SearchNavbar from './index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state)=>{
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, {changeNavbarTab: SetCurrentTabAC}),
    withProvideSearchWithStore
)(SearchNavbar)