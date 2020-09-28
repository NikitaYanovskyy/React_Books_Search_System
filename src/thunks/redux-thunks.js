import searchAPI from '../api/SearchAPI'
import {SimpleGetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC} from '../reducers/SearchReducer'

export const getBooksThunk = (title) =>{
    return async (dispatch) => {

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let responce = await searchAPI.getBooksByTitle(title)
        
        //Hide Loader
        dispatch(SetBooksLoaderAC(false))

        //Get amount of books
        dispatch(GetBooksTotalItemsAC(responce.data.totalItems))
        
        // Get booklist array
        dispatch(SimpleGetBooksAC(responce.data.items))
    }
}