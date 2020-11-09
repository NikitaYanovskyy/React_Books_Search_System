import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () =>{
    return(
        <div className='footer_container'>
                <div className='footer_content side_offset'>
                    <div className='footer_item'>
                        <h1>Author</h1>
                        <a target='_blank' href="https://github.com/TeaMilkShake"><i className="github_icon fa fa-github"></i>https://github.com/TeaMilkShake</a>
                    </div>
                    <div className='footer_item'>
                        <h1>Purpose</h1>
                        <p>This is an application for my portfolio. 
                            Here i mainly wanted to practice my React.js 
                            skills with Redux usage.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Footer