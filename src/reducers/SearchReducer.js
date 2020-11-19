
// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1,
    isBooklistLoaderVisible: false,
    savedTitle: "",
    savedAuthor: "",
    savedFilter: "No filters",
    savedIsNewest: "",
    currentTab: 'simple',
    currentPaginationPage: 1
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})
export const GetBooksTotalItemsAC = (totalItems) => ({type: "GET_BOOKS_TOTAL_ITEMS", totalItems})
export const SetBooksLoaderAC = (isVisible) => ({type: "SET_BOOKS_LOADER", isVisible})

export const SetSavedFormValuesAC = (queryParams) => ({type: "SET_SAVED_FORM_VALUES", queryParams})

export const SetCurrentTabAC = (currentTab) => ({type: "SET_CURRENT_SEARCT_TAB", currentTab})

export const SetCurrentPaginagionPageAC = (currentPaginationPage) => ({type: "SET_CURRENT_PAGINATION_PAGE", currentPaginationPage})
//Reducer
const SearchReducer = (state = initailState, action) =>{
    switch(action.type){
        case "SIMPLE_GET_BOOKS":
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
            const title = action.queryParams.title ? action.queryParams.title : state.savedTitle
            const author = action.queryParams.author ? action.queryParams.author : state.savedAuthor
            const filter = action.queryParams.filter ? action.queryParams.filter : state.savedFilter
            const isNewest = action.queryParams.newestBook ? action.queryParams.newestBook : state.savedIsNewest
            return{
                ...state,
                savedTitle: title,
                savedAuthor: author,
                savedFilter: filter,
                savedIsNewest: isNewest
            }
        case "SET_CURRENT_SEARCT_TAB":
            return{
                ...state,
                currentTab: action.currentTab
            }
        case "SET_CURRENT_PAGINATION_PAGE":
            return{
                ...state,
                currentPaginationPage: action.currentPaginationPage
            }
        default:
            return {...state};
    }
}

export default SearchReducer;