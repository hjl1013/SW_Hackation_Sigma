import React from 'react'
import './InfoWindowButton.css'

function InfoWindowButton() {
    const handleDestinationSet = (e) => {
        console.log(e);
    }

    return (
        <div id='infoWindowButton' className='infoWindowButton'>
            <div className='infowindowButtonDiv'>
                <input
                    onClick = {handleDestinationSet}
                    value = '목적지 선택'
                    type = 'submit'
                ></input>
            </div>
        </div>
    );
}

export default InfoWindowButton
