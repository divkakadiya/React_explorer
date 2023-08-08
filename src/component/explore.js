import React from 'react'
import '../App.css'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'

class Xplore extends React.Component {

    constructor() {
        super()
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
            updateComponent: ''
        }
    }

    updateTime = (currentminut) => {
        if (currentminut >= 25 && currentminut <= 27) {
            return <Breakfast />
        }
        else if (currentminut >= 28 && currentminut <= 30) {
            return <Lunch />
        }
        else if (currentminut >= 31 && currentminut <= 33) {
            return <Dinner />
        }
        else {
            return 'Wait...'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),
                updateComponent: this.updateTime(new Date().getMinutes())
            })
        }, 1000)
    }

    render() {
        return (
            <React.Fragment>
                <div className='alarm'>
                    <h1 style={{ marginBottom: '1vw' }}>Clock : {this.state.currentTime}</h1>
                    <h2>{this.state.updateComponent}</h2>
                </div>
            </React.Fragment>
        )
    }
}


export default Xplore