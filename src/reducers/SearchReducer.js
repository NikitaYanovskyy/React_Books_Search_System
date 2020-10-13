
// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1,
    isBooklistLoaderVisible: false,
    isBooklistImageLoaded: false
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})
export const GetBooksTotalItemsAC = (totalItems) => ({type: "GET_BOOKS_TOTAL_ITEMS", totalItems})
export const SetBooksLoaderAC = (isVisible) => ({type: "SET_BOOKS_LOADER", isVisible})
export const SetBooklistAlertImageAC = (isImageLoaded) => ({type: "SET_BOOKLIST_ALERT_IMAGE", isImageLoaded})

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
        case "SET_BOOKLIST_ALERT_IMAGE":
            return{
                ...state,
                isBooklistImageLoaded: action.isImageLoaded
            }
        default:
            return {...state};
    }
}

export default SearchReducer;