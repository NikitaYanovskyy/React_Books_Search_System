
// Initail state
const initailState = {
    books: [],
    booksTotalItems: -1
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})
export const SimpleGetBooksTotalItemsAC = (totalItems) => ({type: "SIMPLE_GET_TOTAL_ITEMS", totalItems})

//Reducer
const SearchReducer = (state = initailState, action) =>{
    switch(action.type){
        case "SIMPLE_GET_BOOKS":
            return {
                ...state,
                books: typeof action.books === "undefined" ? [] : action.books
            };
        case "SIMPLE_GET_TOTAL_ITEMS":
            return {
                ...state,
                booksTotalItems: action.totalItems
            }
        default:
            return {...state};
    }
}

export default SearchReducer;