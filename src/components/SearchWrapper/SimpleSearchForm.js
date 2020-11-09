import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import {useHistory} from 'react-router-dom'

const SimpleSearchForm = (props) =>{
    const {register, handleSubmit, errors} = useForm()
    const history = useHistory()
    const onSubmit = data => {history.push(`/find/simple?q=${data.title}`)} 
    const isToggled = (value) => value !== props.prevTitle
    
    return( 
        <div className="form" >
            <h1>Simple search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form className="simple_form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" placeholder="Find by book title" ref={register({
                    validate: isToggled
                })}/>
                <input type="submit" value="Find" ref={register}/>

                {errors.title && errors.title.type === "validate" && (
                    <div className="simple_form_spam_error_message"><i className="fa fa-exclamation-circle"></i>Enter something new</div>
                )}
            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default SimpleSearchForm