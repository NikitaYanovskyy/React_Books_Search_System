import searchAPI from '../api/SearchAPI'
import {SimpleGetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetPrevTitleAC} from '../reducers/SearchReducer'

export const getBooksThunk = (title) =>{
    return async (dispatch) => {

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let response = await searchAPI.getBooksByTitle(title)

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))

        //Set previous title
        dispatch(SetPrevTitleAC(title))
        
        //Get amount of books
        dispatch(GetBooksTotalItemsAC(response.data.totalItems))
        
        // Get booklist array
        dispatch(SimpleGetBooksAC(response.data.items))
    }
}