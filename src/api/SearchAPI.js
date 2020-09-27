import axios from 'axios';

const SearchAPI = {
    getBooksByTitle: async (title) => {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:"${title}"&maxResults=30&key=AIzaSyAZjp3yUTRJVxIoXkGU3X9_US7feOy1CU8`);
    }
}

export default SearchAPI