import SearchWrapper from './index'
import {compose} from 'redux'
import {withProvideAdvancedSearchWithStore} from '../../hocs/withHoc'
import {withRouter} from 'react-router-dom'

export default compose(
    withProvideAdvancedSearchWithStore,
    withRouter
)(SearchWrapper)