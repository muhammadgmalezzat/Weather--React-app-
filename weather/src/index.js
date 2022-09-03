//import react , react dom

import React from 'react'
import ReactDOM from 'react-dom'
//import WeatherDisplay from './WeatherDisplay'


// Create class components
class App extends React.Component { 
    //methods
        // constractor function is in JS , at any time e make instance of class components this constructor function is outomatically called  before any thing alse 
        //when we define constructor function in app component ,we are essentially overriding or replacing constructor function in react component ,
        //so to make sure that constructor function in react component is called we use super to call parents
        //every time we change state it will call rener method 
    
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage: "" };
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //to update state we should use setstate function 
                this.setState({ lat: position.coords.latitude })
                //we should never use this
                //this.State.lat = position.coords.latitude;
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    };
    //React says that we have to define render function or it will through error message 
    render() {
        if (this.state.lat && !this.state.errorMessage) 
        { 
            return (<div>lat : {this.state.lat}</div>)
        }
        if (!this.state.lat && this.state.errorMessage)
        {
            return (<div>Error : {this.state.errorMessage}</div>)
        }
        if (!this.state.lat && !this.state.errorMessage)
        {
            return (<div>loading</div>)
        }
    }


};

//show on screen
ReactDOM.render(<App />, document.querySelector('#root'));