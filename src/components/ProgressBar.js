import React from 'react'

import classes from './ProgressBar.module.css'

const Filler = ({ percentage }) => (
    <div className = { classes.Filler } style = {{ width: `${percentage}%` }}>

    </div>
)

const ProgressBar = ({ percentage }) => (
    <div className = { classes.ProgressBar }>
        <Filler percentage = { percentage } />
    </div>
)

export default ProgressBar