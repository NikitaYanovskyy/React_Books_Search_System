import {useState} from 'react'

export function useImage(src){
    const [isImageLoaded,setIsImageLoaded] = useState(false)
    let image = new Image()
    image.src = src
    image.onload = function(){
        setIsImageLoaded(true)
    }

    return {isImageLoaded, src}
}