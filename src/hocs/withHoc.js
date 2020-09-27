import {connect} from 'react-redux'
import {getBooksThunk} from '../thunks/redux-thunks'

export const withProvideSearchWithStore = (Component) =>{
    const mapStateToProps = (state) =>{
        return{

        }
    }
    return connect(mapStateToProps,{getBooksThunk})(Component)
}