export const  isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
export const processImage = (volumeInfo, bookMissingPhoto) =>{
    if(volumeInfo.hasOwnProperty('imageLinks')){
        if(volumeInfo.imageLinks.length === 0){
            return bookMissingPhoto
        }else{
            return volumeInfo.imageLinks.thumbnail
        }
    }else{
        return bookMissingPhoto
    } 
}
export const processCategory = (volumeInfo) =>{

    if(volumeInfo.hasOwnProperty('categories')){
        return volumeInfo.categories
    }else{
        return 'No category'
    }
}
export const processTitle = (title) =>{
    if(title.length >= 40){
        title = title.substring(0, 40)
        let bookTitleLastWordIndex = title.lastIndexOf(" ")
        return title.substring(0, bookTitleLastWordIndex) + '...'
    }else{
        return title
    }
}
export const processPrice = (saleInfo) =>{
    let bookPriceAmount =  typeof saleInfo.listPrice !== `undefined` 
    ? saleInfo.listPrice.amount 
    : ""
    let bookPriceCurrencyCode =  typeof saleInfo.listPrice !== `undefined` 
    ? saleInfo.listPrice.currencyCode 
    : ""
    switch (saleInfo.saleability){
        case 'FREE':
            return 'Free' 
        case 'NOT_FOR_SALE':
            return 'Not for sale'
        case 'FOR_SALE':
            return `${bookPriceAmount} ${bookPriceCurrencyCode}`
        default:
            return 'Different'
    }
}
export const processPages = (volumeInfo)=>{
    if(volumeInfo.hasOwnProperty(`pageCount`)){
        return volumeInfo.pageCount
    }else{
        return 0
    }
}

export const setQueryParam = (queryParam) =>{
    if(queryParam !== null){
        return queryParam
    }else{
        return ''
    } 
}