import searchAPI from '../api/SearchAPI'
import {SimpleGetBooksAC} from '../reducers/SearchReducer'

export const getBooksThunk = (title="") =>{
    return async (dispatch) => {
        let responce = await searchAPI.getBooksByTitle(title)
        dispatch(SimpleGetBooksAC(responce.data.items))
    }
}