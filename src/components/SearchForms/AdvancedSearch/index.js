import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import 'font-awesome/css/font-awesome.min.css';
import {useHistory} from 'react-router-dom'

const AdvancedSearch = (props) =>{
    const {register, handleSubmit, errors, setValue, getValues} = useForm()
    const history = useHistory()
    
    useEffect(()=>{
        setValue("title", props.savedTitle)
        setValue("author", props.savedAuthor)
        setValue("filter", props.savedFilter)
        setValue("newestBook", Boolean(props.savedIsNewest) === true ? "checked" : "")
    },[props.savedTitle,props.savedAuthor,props.savedFilter,props.savedIsNewest])
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
        if(data.filter && data.filter !== "No filters"){
            pushUrl+=`filter=${data.filter}&`
        } 
        if(data.newestBook){
            pushUrl+=`newestBook=${data.newestBook}&`
        } 
        history.push(pushUrl)
    }
    const labelStyle = {
        top: `-25px`,
        left: `0`,
        color: `#000`,
        fontSize: `16px`
    }
    return ( 
        <div className="form" >
            <h1>Advanced search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form className="advanced_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-text-input">
                    <input ref={register({
                        validate: () =>{return getValues("title") !== "" || getValues("author") !== ""}
                    })} type="text" name="title" autoComplete="off" id="title" />
                    <label style={labelStyle} htmlFor="title">Title</label>
                </div> 
                <div className="form-text-input">
                    <input ref={register({
                        validate: () =>{return getValues("title") !== "" || getValues("author") !== ""}
                    })} type="text" name="author" autoComplete="off" id="author" />
                    <label style={labelStyle} htmlFor="author">Author</label>
                </div> 

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
                {errors.title && errors.title.type === "validate" &&
                    <div className="error advanced_error"><i className="fa fa-exclamation-circle"></i>You can't search for nothing</div>
                }
                {errors.author && errors.author.type === "validate" &&
                    <div className="error advanced_error"><i className="fa fa-exclamation-circle"></i>You can't search for nothing</div>
                }
            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default AdvancedSearch