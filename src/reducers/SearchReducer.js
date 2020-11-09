
// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1,
    isBooklistLoaderVisible: false,
    prevTitle: "",
    currentTab: 'simple'
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})
export const GetBooksTotalItemsAC = (totalItems) => ({type: "GET_BOOKS_TOTAL_ITEMS", totalItems})
export const SetBooksLoaderAC = (isVisible) => ({type: "SET_BOOKS_LOADER", isVisible})
export const SetPrevTitleAC = (newTitle) => ({type: "SET_PREV_TITLE", newTitle})
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
        case "SET_PREV_TITLE":
            const newTitle = action.newTitle === null ? state.prevTitle : action.newTitle
            return{
                ...state,
                prevTitle: newTitle
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