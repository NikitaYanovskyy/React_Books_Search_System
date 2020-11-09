import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import {AdvancedTextInput, AdvancedCheckboxInput} from './AdvancedInputs'
import 'font-awesome/css/font-awesome.min.css';
import {useHistory} from 'react-router-dom'

const AdvancedSearch = () =>{
    const {register, handleSubmit, errors, control} = useForm()
    const history = useHistory()

    const onSubmit = (data)=>{
        history.push(`/find/advanced?q=${data.title}`)
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
                    <Controller as={AdvancedCheckboxInput} control={control} reference={register} name="freeBook" label="Free book"/>
                    <Controller as={AdvancedCheckboxInput} control={control} reference={register} name="paidBook" label="Paid book"/>
                    <Controller as={AdvancedCheckboxInput} control={control} reference={register} name="newestBook" label="Newest"/>
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