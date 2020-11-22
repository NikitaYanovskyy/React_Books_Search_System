import {compose} from 'redux'
import SearchNavbar from './index'
import {withRouter} from 'react-router-dom'


export default compose(
    withRouter
)(SearchNavbar)