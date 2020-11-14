import React, {useEffect} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {AdvancedTextInput, AdvancedCheckboxInput} from './AdvancedInputs'
import 'font-awesome/css/font-awesome.min.css';
import {useHistory} from 'react-router-dom'

const AdvancedSearch = (props) =>{
    const {register, handleSubmit, errors, control, setValue} = useForm()
    const history = useHistory()
    
    useEffect(()=>{
        if(props.savedTitle !== ''){
            setValue("title", props.savedTitle)
        }
    })
    const onSubmit = (data)=>{
        let pushUrl = '/find/advanced'
        if(data.title || data.author || data.filter || data.newestBook){
            pushUrl+="?"
        }  
        if(data.title){
            pushUrl+=`q=${data.title}&`
        }
        if(data.author){
            pushUrl+=`author=${data.author}&`
        } 
        if(data.filter && data.filter != "No filters"){
            pushUrl+=`filter=${data.filter}&`
        } 
        if(data.newestBook){
            pushUrl+=`newestBook=${data.newestBook}&`
        } 
        history.push(pushUrl)
    }

    return ( 
        <div className="form" >
            <h1>Advanced search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form className="advanced_form" onSubmit={handleSubmit(onSubmit)}>
                <Controller as={AdvancedTextInput} control={control} reference={register} name="title" label="Title"/>
                <Controller as={AdvancedTextInput} control={control} reference={register} name="author" label="Author"/>

                <div className="filters">
                    <h3>Filters</h3>
                    <div className="form-select-input">
                        <select name="filter" ref={register}>
                            <option>No filters</option>
                            <option>Free book</option>
                            <option>Paid book</option>
                        </select>
                    </div>
                    <div className="form-checkbox-input">
                        <input ref={register} type="checkbox" name={"newestBook"} id={"Newest"}/>
                        <label htmlFor="Newest">Newest</label>
                    </div> 
                </div> 
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default AdvancedSearch