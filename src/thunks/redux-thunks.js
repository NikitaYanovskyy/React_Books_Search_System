import searchAPI from '../api/SearchAPI'
import {GetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetSavedFormValuesAC, SetCurrentPaginagionPageAC, SetIsAllowedToSendRequestAC} from '../reducers/SearchReducer'


export const getBooksThunk = (queryParams) =>{
    return async (dispatch) => {
        //Set saved form params
        dispatch(SetSavedFormValuesAC(queryParams))

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        try{
            let response = await searchAPI.getBooks(queryParams)

            // Get booklist array
            dispatch(GetBooksAC(response.data.items))

            //Get amount of books
            dispatch(GetBooksTotalItemsAC(response.data.totalItems))
            dispatch(SetCurrentPaginagionPageAC(queryParams.currentPaginationPage))

            //Hide Loader
            dispatch(SetBooksLoaderAC(false))
        }catch(error){
            dispatch(GetBooksTotalItemsAC(0))
        }
    }
}