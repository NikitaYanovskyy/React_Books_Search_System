import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import 'font-awesome/css/font-awesome.min.css';
import {useHistory} from 'react-router-dom'
import Select from 'react-select'

  
const Search = (props) =>{
    const {register, handleSubmit, errors, setValue, getValues} = useForm()
    const history = useHistory()

    useEffect(()=>{
        setValue("title", props.savedTitle)
        setValue("author", props.savedAuthor)
        setValue("filter", props.savedFilter)
        setValue("newestBook", Boolean(props.savedIsNewest) === true ? "checked" : "")
    },[props.savedTitle,props.savedAuthor,props.savedFilter,props.savedIsNewest])
    const onSubmit = (data)=>{

        // Allow to server request from search wrapper 
        props.SetIsAllowedToSendRequest(true)

        // Building url
        let pushUrl = '/React_Books_Search_System/find'
        if(data.title || data.author || data.filter || data.newestBook){
            pushUrl+="?"
        }  
        if(data.title){
            pushUrl+=`q=${data.title}&`
        }
        if(data.author){
            pushUrl+=`author=${data.author}&`
        } 
        if(selectedOption && selectedOption !== "No filters"){
            pushUrl+=`filter=${selectedOption}&`
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

    //Select
    const [selectedOption, setSelectedOption] = useState(null)
    const onSelectChange = (selectedOption)=>{
        if(selectedOption !== selectedOption.value) setSelectedOption(selectedOption.value)
    }
    const options = [
        { value: 'No filters', label: 'No filters' },
        { value: 'Free book', label: 'Free book' },
        { value: 'Paid book', label: 'Paid book' }
      ]

    const customStyles = {
    /*option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20,
    }),*/
    control: (provided, state) => {
        const boxShadow = state.isFocused ? `0 0 0 1px #c75e70` : `none` 
        const borderColor = state.isFocused ? `#c75e70` : `#d6d4d4` 
        return{...provided, boxShadow, borderColor, '&:hover': {
            borderColor: state.isFocused ? '#c75e70' : '#afafaf'
          }}
    },
    option: (provided, state) => {
        const fontSize = `14px`
        const backgroundColor = state.isSelected ? '#5a0f0f' : 'transparent'
        return{...provided, backgroundColor,fontSize, '&:hover': {
            backgroundColor: state.isFocused ? '#c75e70' : 'transparent',
            color: '#fff'
          }}
    },
    menu: (provided) => {
        const zIndex = `2`
        return{...provided, zIndex}
    },
    singleValue: (provided)=>{
        const fontSize = `14px`
        return{...provided, fontSize}
    }
    /*singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
    }*/
    }
    return ( 
        <div className="form" >
            <h1>Start searching</h1> 
            <p>Find books by using the form below</p> 
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
                    <p>Filters</p>
                    <div className="form-select-input">
                        <Select 
                            defaultValue={options.filter(item => item.value === props.savedFilter)[0]}
                            onChange={onSelectChange}
                            styles={customStyles}
                            options={options} 
                        />
                    </div>
                    <div className="form-checkbox-input">
                        <div className="checkbox">
                            <input ref={register} type="checkbox" name={"newestBook"} id={"Newest"}/>
                            <div className="checkbox_background"></div>
                        </div>
                        <label htmlFor="Newest">Sort by newest</label>
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



export default Search