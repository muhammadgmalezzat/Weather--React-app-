//import react , react dom

import React from 'react'
import ReactDOM from 'react-dom'
import WeatherDisplay from './WeatherDisplay'
import Spinner from './Spinner'

// Create class components
class App extends React.Component { 
    //methods
        // constractor function is in JS , at any time e make instance of class components this constructor function is outomatically called  before any thing alse 
        //when we define constructor function in app component ,we are essentially overriding or replacing constructor function in react component ,
        //so to make sure that constructor function in react component is called we use super to call parents
        //every time we change state it will call rener method 
    state ={ lat: null, errorMessage: ""}

    //creating component did method 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message }));
        }
    //React says that we have to define render function or it will through error message 
    render() {
        if (this.state.lat && !this.state.errorMessage) 
        { 
            return <WeatherDisplay lat={this.state.lat }/>
        }
        if (!this.state.lat && this.state.errorMessage)
        {
            return (<div>Error : {this.state.errorMessage}</div>)
        }
        if (!this.state.lat && !this.state.errorMessage)
        {
            return <Spinner/>
        }
    }


};

//show on screen
ReactDOM.render(<App />, document.querySelector('#root'));