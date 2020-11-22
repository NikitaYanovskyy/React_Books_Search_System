import SearchWrapper from './index'
import {compose} from 'redux'
import {withProvideSearchWithStore} from '../../hocs/withHoc'
import {withRouter} from 'react-router-dom'

export default compose(
    withProvideSearchWithStore,
    withRouter
)(SearchWrapper)