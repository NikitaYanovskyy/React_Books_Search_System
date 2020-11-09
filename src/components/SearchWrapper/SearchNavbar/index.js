import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'

const SearchNavbar = (props) =>{
    useEffect(()=>{
        if(props.match.url.includes('advanced') && props.currentTab === `simple`){
            props.changeNavbarTab('advanced')
        }
    })
    const setTabToSimple = ()=>{
        props.changeNavbarTab('simple')
    }
    const setTabToAdvanced = ()=>{
        props.changeNavbarTab('advanced')
    }

    return(
        <div className='select_form_bar'>
            <NavLink onClick={setTabToSimple} className='select_form_item' to='/find/simple'>
                <p>Simple</p>
                <div className='select_form_item_line' style={props.currentTab === `simple` ? {width: `100%`} : {width: `0`}}></div>
            </NavLink>
            <NavLink onClick={setTabToAdvanced} className='select_form_item' to='/find/advanced'>
                <p>Advanced</p>
                <div className='select_form_item_line' style={props.currentTab === `advanced` ? {width: `100%`} : {width: `0`}}></div>
            </NavLink>
    
            {/*Mobile show description*/}
            <div onClick={props.showDescription} className='show_description_open'>
                <p>Show description</p>
                <i className="fa fa-question-circle"></i>
            </div>
            
            {/*Absolute background*/}
            <div className="select_form_bar_background"></div>
        </div>
    )
}

export default SearchNavbar
