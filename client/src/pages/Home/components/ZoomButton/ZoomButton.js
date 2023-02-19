import React from 'react'
import './ZoomButton.css'

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';


function ZoomButton({ zoom, onValueChange }) {
    const zoomIn = () => {
        onValueChange(zoom + 1);
        console.log(zoom);
    }

    const zoomOut = () => {
        onValueChange(zoom - 1);
        console.log(zoom);
    }

  return (
    <div className='zoomButton'>
        <div className='zoomButton__element'>
            <ZoomInIcon onClick={zoomIn}/>
        </div>

        <div className='zoomButton__element'>
            <ZoomOutIcon onClick={zoomOut}/>
        </div>

    </div>
  )
}

export default ZoomButton
