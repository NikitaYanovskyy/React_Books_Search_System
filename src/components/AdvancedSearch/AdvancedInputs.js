import React, {useState} from 'react'


export const AdvancedTextInput = (props)=>{
    const [isInputFocused, setIsInputFocused] = useState(false)
    const onFocus = ()=>{
        setIsInputFocused(true)
    }
    const onBlur = (e)=>{
        if(isInputFocused && e.target.value.length === 0){
            setIsInputFocused(false)
        }
    }
    const labelStyleOnInputFocus = {
        top: `-25px`,
        left: `0`,
        color: `#000`,
        fontSize: `16px`
    }
    const labelStyleOnInputBlur = {
        top: `12px`,
        left: `10px`,
        fontSize: `14px`,
        color: `rgb(127, 127, 127)`
    }
    return(
        <div className="form-text-input">
            <input ref={props.reference} onFocus={onFocus} onBlur={(e)=>onBlur(e)} type="text" name={props.name} autoComplete="off" id={props.name}/>
            <label style={isInputFocused ? labelStyleOnInputFocus : labelStyleOnInputBlur} htmlFor={props.name}>{props.label}</label>
        </div> 
    )
}

export const AdvancedCheckboxInput = (props)=>{
    return(
        <div className="form-checkbox-input">
            <input ref={props.reference} type="checkbox" name={props.name} id={props.name}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div> 
    )
}

