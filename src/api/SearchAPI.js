import axios from 'axios';

export const maxResults = 30;

const SearchAPI = {
    getBooksByTitle: async (title) => {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"&maxResults=${maxResults}&key=AIzaSyAZjp3yUTRJVxIoXkGU3X9_US7feOy1CU8`);
    },

    getSingleBook: async (bookId) =>{
        return await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyAZjp3yUTRJVxIoXkGU3X9_US7feOy1CU8`);
    }
}

export default SearchAPI