import searchAPI from '../api/SearchAPI'
import {GetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetSavedFormValuesAC, SetCurrentPaginagionPageAC} from '../reducers/SearchReducer'


export const getBooksThunk = (queryParams) =>{
    return async (dispatch) => {
        //Set saved form params
        dispatch(SetSavedFormValuesAC(queryParams))

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        try{
            let response = await searchAPI.getBooks(queryParams)

            //Hide Loader
            dispatch(SetBooksLoaderAC(false))
            
            //Get amount of books
            dispatch(GetBooksTotalItemsAC(response.data.totalItems))
            dispatch(SetCurrentPaginagionPageAC(queryParams.currentPaginationPage))

            // Get booklist array
            dispatch(GetBooksAC(response.data.items))
        }catch(error){
            dispatch(GetBooksTotalItemsAC(0))
        }

        
    }
}