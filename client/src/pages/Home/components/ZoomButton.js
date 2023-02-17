import React from 'react'
import './ZoomButton.css'

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';


function ZoomButton() {
  return (
    <div className='zoomButton'>
        <div className='zoomButton__element'>
            <ZoomInIcon />
        </div>

        <div className='zoomButton__element'>
            <ZoomOutIcon />
        </div>

    </div>
  )
}

export default ZoomButton
