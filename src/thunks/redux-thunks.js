import searchAPI from '../api/SearchAPI'
import {SimpleGetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetSavedTitleAC} from '../reducers/SearchReducer'

export const getBooksThunk = (queryParams) =>{
    return async (dispatch) => {

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let response = await searchAPI.getBooksByTitle(queryParams.title)

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))

        //Set previous title
        dispatch(SetSavedTitleAC(queryParams.title))
        
        //Get amount of books
        dispatch(GetBooksTotalItemsAC(response.data.totalItems))
        
        // Get booklist array
        dispatch(SimpleGetBooksAC(response.data.items))
    }
}
export const getBooksAdvancedThunk = (queryParams) =>{
    return async (dispatch) => {

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let response = await searchAPI.getBooksAdvanced(queryParams)

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))

        //Set saved title
        dispatch(SetSavedTitleAC(queryParams.title))
        
        //Get amount of books
        dispatch(GetBooksTotalItemsAC(response.data.totalItems))
        
        // Get booklist array
        dispatch(SimpleGetBooksAC(response.data.items))
    }
}