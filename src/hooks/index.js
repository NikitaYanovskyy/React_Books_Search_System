import {useState} from 'react'
import {useLocation} from 'react-router-dom'

export const useImage=(src)=>{
    const [isImageLoaded,setIsImageLoaded] = useState(false)
    let image = new Image()
    image.src = src
    image.onload = function(){
        setIsImageLoaded(true)
    }

    return {isImageLoaded, src}
}

export const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
}