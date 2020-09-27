import React from 'react'
import {useForm} from 'react-hook-form'
const SimpleSearchForm = (props) =>{
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = data => props.getBooksThunk(data.simple_title_input)
    
    return( 
        <div className="form simple_form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Simple search</h1> 
            <p>Find book by it’s name or particular word in the name</p> 
            <form>
                <input type="text" name="simple_title_input" placeholder="Find by book title" ref={register}/>
                <input type="submit" value="Find" ref={register}/>
            </form>
            <hr className="form_line"></hr>
        </div>
    )
}

export default SimpleSearchForm