//import react , react dom
import React from 'react'




const getSeason = (lat, month )=> {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const weatherDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is Chilly' : 'Lets hit the Beach';
    const iconName = season === 'winter' ? 'sonwflake' : 'sun';
    return (
        <div>
            <i className={`${iconName} icon `}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon `}></i>
        </div>
    );
};

export default weatherDisplay;