import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import {useHistory} from 'react-router-dom'

const SimpleSearchForm = (props) =>{
    const {register, handleSubmit, errors, setValue} = useForm({})
    const history = useHistory()
    const onSubmit = data => {
        history.push(`/find/simple?q=${data.title}`)
    } 
    const isToggled = (value) => value !== props.savedTitle
    
    useEffect(()=>{
        setValue("title", props.savedTitle)
    },[props.savedTitle])
    return( 
        <div className="form" >
            <h1>Simple search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form className="simple_form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" autoComplete="off" name="title" placeholder="Find book by title" ref={register({
                    validate: isToggled,
                    required: true
                })}/>
                <input type="submit" value="Find" ref={register}/>
                {errors.title && errors.title.type === "required" && (
                    <div className="error simple_error"><i className="fa fa-exclamation-circle"></i>You should type something</div>
                )}
                {errors.title && errors.title.type === "validate" && (
                    <div className="error simple_error"><i className="fa fa-exclamation-circle"></i>Enter something new</div>
                )}

            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default SimpleSearchForm