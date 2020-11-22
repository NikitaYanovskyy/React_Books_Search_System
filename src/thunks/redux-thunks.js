import searchAPI from '../api/SearchAPI'
import {GetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetSavedFormValuesAC, SetCurrentPaginagionPageAC} from '../reducers/SearchReducer'


export const getBooksAdvancedThunk = (queryParams) =>{
    return async (dispatch) => {
        //Set saved form params
        dispatch(SetSavedFormValuesAC(queryParams))

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        let response = await searchAPI.getBooksAdvanced(queryParams)

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))
        
        //Get amount of books
        dispatch(GetBooksTotalItemsAC(response.data.totalItems))
        dispatch(SetCurrentPaginagionPageAC(queryParams.currentPaginationPage))

        // Get booklist array
        dispatch(GetBooksAC(response.data.items))
    }
}