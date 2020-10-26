import React from 'react'
import {useForm} from 'react-hook-form'
import 'font-awesome/css/font-awesome.min.css'
const SimpleSearchForm = (props) =>{
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = data => props.getBooksThunk(data.simple_title_input, props.prevTitle)
    
    const isToggled = (value) => value !== props.prevTitle;

    return( 
        <div className="form simple_form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Simple search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form className="search_form">
                <input type="text" name="simple_title_input" placeholder="Find by book title" ref={register({
                    validate: isToggled
                })}/>
                <input type="submit" value="Find" ref={register}/>

                {errors.simple_title_input && errors.simple_title_input.type === "validate" && (
                    <div className="simple_form_spam_error_message"><i className="fa fa-exclamation-circle"></i>Enter something new</div>
                )}
            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default SimpleSearchForm