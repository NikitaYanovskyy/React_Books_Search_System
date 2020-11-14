import React, {useState} from 'react'


export const AdvancedTextInput = (props)=>{
    const labelStyleOnInputFocus = {
        top: `-25px`,
        left: `0`,
        color: `#000`,
        fontSize: `16px`
    }
    return(
        <div className="form-text-input">
            <input ref={props.reference} type="text" name={props.name} autoComplete="off" id={props.name} />
            <label style={labelStyleOnInputFocus} htmlFor={props.name}>{props.label}</label>
        </div> 
    )
}

