import searchAPI from '../api/SearchAPI'
import {GetBooksAC, GetBooksTotalItemsAC, SetBooksLoaderAC, SetSavedFormValuesAC, SetCurrentPaginagionPageAC, SetIsAllowedToSendRequestAC} from '../reducers/SearchReducer'

export const getBooksThunk = (queryParams) =>{
    return async (dispatch, getState) => {
        alert(queryParams.title)
        const state = getState();
        let prevQueryParams = {
            title: state.searchBranch.savedTitle,
            author: state.searchBranch.savedAuthor,
            filter: state.searchBranch.savedFilter,
            newestBook: state.searchBranch.savedIsNewest,
        }

        /*for(let prop in queryParams){
            if (queryParams[prop] === prevQueryParams[prop]){
                isEqual = true
                break;
            }else{
                isEqual = false
            }
        }*/
        //Set saved form params
        dispatch(SetSavedFormValuesAC(queryParams))

        //Show Loader
        dispatch(SetBooksLoaderAC(true))
        try{
            let response = await searchAPI.getBooks(queryParams)
            //Get amount of books
            dispatch(GetBooksTotalItemsAC(response.data.totalItems))
            dispatch(SetCurrentPaginagionPageAC(queryParams.currentPaginationPage))

            // Get booklist array
            dispatch(GetBooksAC(response.data.items))   
        }catch(error){
            dispatch(GetBooksTotalItemsAC(0))
        }

        //Hide Loader
        dispatch(SetBooksLoaderAC(false))        
    }
}