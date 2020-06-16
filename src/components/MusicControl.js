import React from 'react'

import ProgressBar from './ProgressBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './MusicControl.module.css'

const MusicControl = ({ percentage }) => (
    <div className = { classes.Control }>
        <div className = { classes.Row }>
                <FontAwesomeIcon 
                    icon = { [ 'fas', 'play' ] } 
                    className = { classes.Play } /> 
            <div className = { classes.LabelContainer }>
                <h5 className = { classes.Title }>Bunker</h5>
                <p className = { classes.Artist }>Balthazar</p>
            </div>
            <p className = { classes.TimeLabel }>4.05</p>
        </div>
        <div className = { classes.ProgressBarContainer }>
            <ProgressBar percentage = { percentage } />
        </div>
    </div>
)

export default MusicControl