import React from 'react'
import aboutImage from '../../graphycs/images/about.jpg'
import PageNotFound from '../NotFound/PageNotFound'
const About = () =>{
    return(
        <PageNotFound firstTitle="Good" secondTitle="Very good project" src={aboutImage}/>
    )
}

export default About;