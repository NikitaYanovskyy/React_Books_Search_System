
// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1,
    isBooklistLoaderVisible: false,
    savedTitle: "",
    savedAuthor: "",
    savedFilter: "",
    savedIsNewest: "",
    currentTab: 'simple'
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})
export const GetBooksTotalItemsAC = (totalItems) => ({type: "GET_BOOKS_TOTAL_ITEMS", totalItems})
export const SetBooksLoaderAC = (isVisible) => ({type: "SET_BOOKS_LOADER", isVisible})

export const SetSavedTitleAC = (title) => ({type: "SET_SAVED_TITLE", title})
export const SetSavedAuthorAC = (author) => ({type: "SET_SAVED_AUTHOR", author})
export const SetSavedFilterAC = (filter) => ({type: "SET_SAVED_FILTER", filter})
export const SetSavedIsNewestAC = (isNewest) => ({type: "SET_SAVED_IS_NEWEST", isNewest})

export const SetCurrentTabAC = (currentTab) => ({type: "SET_CURRENT_SEARCT_TAB", currentTab})

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
        case "SET_SAVED_TITLE":
            const title = action.title ? action.title : state.savedTitle
            return{
                ...state,
                savedTitle: title
            }
        case "SET_SAVED_AUTHOR":
            const author = action.author ? action.author : state.savedAuthor
            return{
                ...state,
                author: author
            }
        case "SET_SAVED_FILTER":
            return{
                ...state,
                savedFilter: action.filter
            }
        case "SET_SAVED_IS_NEWEST":
            return{
                ...state,
                savedIsNewest: action.isNewest
            }
        case "SET_CURRENT_SEARCT_TAB":
            return{
                ...state,
                currentTab: action.currentTab
            }
        default:
            return {...state};
    }
}

export default SearchReducer;