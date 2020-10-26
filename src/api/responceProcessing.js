export const processImage = (obj, bookMissingPhoto) =>{
    if(obj.hasOwnProperty('imageLinks')){
        if(obj.imageLinks.length === 0){
            return bookMissingPhoto
        }else{
            return obj.imageLinks.thumbnail
        }
    }else{
        return bookMissingPhoto
    } 
}
export const processCategory = (obj) =>{

    if(obj.hasOwnProperty('categories')){
        return obj.categories
    }else{
        return 'No category'
    }
}
export const processTitle = (title) =>{
    if(title.length >= 40){
        title = title.substring(0, 40)
        let bookTitleLastWordIndex = title.lastIndexOf(" ")
        return title.substring(0, bookTitleLastWordIndex) + '...'
    }
}
export const processPrice = (saleability, amount, currencyCode) =>{
    switch (saleability){
        case 'FREE':
            return 'Free' 
        case 'NOT_FOR_SALE':
            return 'Not for sale'
        case 'FOR_SALE':
            return `${amount} ${currencyCode}`
        default:
            return 'Different'
    }
}