// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1,
    isBooklistLoaderVisible: false,
    savedTitle: "",
    savedAuthor: "",
    savedFilter: "No filters",
    savedIsNewest: "",
    currentPaginationPage: 1,
    startIndex: 0,
    isAllowedToSendRequest: true
}

//Actions
export const GetBooksAC = (books) => ({type: 'GET_BOOKS', books})
export const GetBooksTotalItemsAC = (totalItems) => ({type: "GET_BOOKS_TOTAL_ITEMS", totalItems})
export const SetBooksLoaderAC = (isVisible) => ({type: "SET_BOOKS_LOADER", isVisible})

export const SetSavedFormValuesAC = (queryParams) => ({type: "SET_SAVED_FORM_VALUES", queryParams})

export const SetCurrentPaginagionPageAC = (currentPaginationPage) => ({type: "SET_CURRENT_PAGINATION_PAGE", currentPaginationPage})

export const SetIsAllowedToSendRequestAC = (isAllowedToSendRequest) => ({type: "SET_IS_ALLOWED_TO_SEND_REQUEST", isAllowedToSendRequest})

//Reducer
const SearchReducer = (state = initailState, action) =>{
    switch(action.type){
        case "GET_BOOKS":
            return {
                ...state,
                books: typeof action.books === "undefined" ? [] : action.books
            };
        case "GET_BOOKS_TOTAL_ITEMS":
            return {
                ...state,
                booksTotalItems: action.totalItems
            }
        case "SET_BOOKS_LOADER":
            return{
                ...state,
                isBooklistLoaderVisible: action.isVisible
            }
        case "SET_SAVED_FORM_VALUES":
            const title = (action.queryParams.title !== undefined || action.queryParams.title === "") ? action.queryParams.title : state.savedTitle
            const author = (action.queryParams.author !== undefined  || action.queryParams.author === "") ? action.queryParams.author : state.savedAuthor
            const filter = (action.queryParams.author === undefined  ||  action.queryParams.filter !== "") ? action.queryParams.filter : "No filters"
            const isNewest = (action.queryParams.newestBook !== undefined  || action.queryParams.newestBook === "") ? action.queryParams.newestBook : state.savedIsNewest
            return{
                ...state,
                savedTitle: title,
                savedAuthor: author,
                savedFilter: filter,
                savedIsNewest: isNewest
            }
        case "SET_CURRENT_PAGINATION_PAGE":
            return{
                ...state,
                currentPaginationPage: action.currentPaginationPage
            }
        case "SET_IS_ALLOWED_TO_SEND_REQUEST":
            return{
                ...state,
                isAllowedToSendRequest: action.isAllowedToSendRequest
            }
        default:
            return {...state};
    }
}

export default SearchReducer;