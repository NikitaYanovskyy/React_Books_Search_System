import axios from 'axios';
import {Redirect} from 'react-router-dom'

export const maxResults = 30;

// Axios single book interceptors
export const axiosSingleBook = axios.create()


const SearchAPI = {
    getBooksByTitle: async (title) => {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"&maxResults=${maxResults}&key=AIzaSyAZjp3yUTRJVxIoXkGU3X9_US7feOy1CU8`);
    },

    getSingleBook: async (bookId) =>{
        return await axiosSingleBook.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyAZjp3yUTRJVxIoXkGU3X9_US7feOy1CU8`);
    }
}

export default SearchAPI