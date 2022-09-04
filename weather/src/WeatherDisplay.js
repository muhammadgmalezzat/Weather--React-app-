import './WeatherDisplay.css';
import React from 'react'

const seasocConfig = {
    summer: {
        text: "Lets hit the Beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is Chilly",
        iconName: "sonwflake"
    }
}


const getSeason = (lat, month )=> {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const weatherDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //estructuring text and icon from seasonconfig object 
    const { text, iconName } = seasocConfig[season];
    return (
        <div className={`weather-display ${season} `}>
            <i className={`icon-left massive ${iconName} icon `}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon `}></i>
        </div>
    );
};

export default weatherDisplay;