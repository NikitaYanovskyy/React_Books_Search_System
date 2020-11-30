import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export const useImage=(src)=>{
    const [isImageLoaded,setIsImageLoaded] = useState(false)
    let isMounted = true
    let image = new Image()
    image.src = src
    image.onload = function(){
        if(isMounted){
            setIsImageLoaded(true)
        }
    }
    useEffect(()=>{
        return () => isMounted = false
    })
    return {isImageLoaded, src}
}

export const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
}