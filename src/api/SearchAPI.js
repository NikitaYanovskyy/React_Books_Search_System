import axios from 'axios';

export const maxResults = 30;

const SearchAPI = {
    getBooksByTitle: async (title) => {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"&maxResults=${maxResults}`);
    },
    getSingleBook: async (bookId) =>{
        return await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    },
    getBooksAdvanced: async (title='', author='', isFree=false, isPaid=false, isNewest=false)=>{
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=${maxResults}`);
    }
}

export default SearchAPI