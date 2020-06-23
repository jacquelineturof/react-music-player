import React from 'react'

import classes from './Item.module.css'

const Item = ({ location, src, clicked  }) => {
    return (
        <div 
            className = { [ classes.Item, classes[location] ].join(' ')}
            onClick = { clicked }>
            <img src = { src } className = { classes.Image  } />
        </div>
    )
}

export default Item