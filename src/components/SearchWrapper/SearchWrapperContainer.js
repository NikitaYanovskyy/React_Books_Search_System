import SearchWrapper from './index'
import {compose} from 'redux'
import {withProvideSearchWithStore, withProvideAdvancedSearchWithStore} from '../../hocs/withHoc'
import {withRouter} from 'react-router-dom'

export default compose(
    withProvideAdvancedSearchWithStore,
    withProvideSearchWithStore,
    withRouter
)(SearchWrapper)