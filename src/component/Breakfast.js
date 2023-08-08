import React from 'react'
import '../App.css'
import breakfast from './img/breakfast.jpeg'

const Breakfast = () => {
    return (
        <React.Fragment>
            <p>Hey Good Morning <br />Take Your Breakfast</p>
            <img src={ breakfast} />
        </React.Fragment>
    )
}

export default Breakfast