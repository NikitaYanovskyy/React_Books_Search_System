import {connect} from 'react-redux'
import {getBooksThunk} from '../thunks/redux-thunks'

export const withProvideSearchWithStore = (Component) =>{
    const mapStateToProps = (state) =>{
        return {}
    }
    return connect(mapStateToProps,{getBooksThunk})(Component)
}

export const withProvideBooksLoaderState = (Component) =>{
    const mapStateToProps = (state) =>{
        return {
            isBooklistLoaderVisible: state.isBooklistLoaderVisible,
            isBooklistImageLoaded: state.isBooklistImageLoaded
        }
    }

    return connect(mapStateToProps,{})(Component)
}