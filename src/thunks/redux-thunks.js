import searchAPI from '../api/SearchAPI'
import {SimpleGetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetPrevTitleAC} from '../reducers/SearchReducer'

export const getBooksThunk = (title) =>{
    return async (dispatch) => {

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let responce = await searchAPI.getBooksByTitle(title)

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))

        //Set previous title
        dispatch(SetPrevTitleAC(title))
        
        //Get amount of books
        dispatch(GetBooksTotalItemsAC(responce.data.totalItems))
        
        // Get booklist array
        dispatch(SimpleGetBooksAC(responce.data.items))
    }
}