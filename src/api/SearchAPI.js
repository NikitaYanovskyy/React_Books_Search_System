import axios from 'axios';
export const maxResults = 30;
export const paginationItemsAmount = 7;
const SearchAPI = {
    getSingleBook: async (bookId) =>{
        return await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    },
    getBooksAdvanced: async (queryParams)=>{
        let startIndex = queryParams.currentPaginationPage ? queryParams.currentPaginationPage * 30 - 30 : 0
        let requestUrl = `https://www.googleapis.com/books/v1/volumes?`
        if(queryParams.author && queryParams.title){
            requestUrl+=`q=intitle:${queryParams.title}+inauthor:${queryParams.author}&`
        }else if(queryParams.title){
            requestUrl+=`q=intitle:${queryParams.title}&`
        }else if(queryParams.author){
            requestUrl+=`q=inauthor:${queryParams.author}&`
        }
        if(queryParams.filter === "Free book"){
            requestUrl+=`filter=free-ebooks&`
        }else if(queryParams.filter === "Paid book"){
            requestUrl+=`filter=paid-ebooks&`
        } 
        if(queryParams.newestBook){
            requestUrl+=`orderBy=newest&`
        }
        return await axios.get(requestUrl+`startIndex=${startIndex}&maxResults=${maxResults}`);
    }
}

export default SearchAPI