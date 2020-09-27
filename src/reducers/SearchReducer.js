
// Initail state
const initailState = {
    books: []
}

//Actions
export const SimpleGetBooksAC = (books) => ({type: 'SIMPLE_GET_BOOKS', books})

//Reducer
const SearchReducer = (state = initailState, action) =>{
    switch(action.type){
        case 'SIMPLE_GET_BOOKS':
            return {
                ...state,
                books: action.books
            };
        default:
            return {...state};
    }
}

export default SearchReducer;