import React, { useState } from 'react'

import Item from './Item'

import Image1 from '../Assets/mercedes-schulz-j0ygyRIaHtI-unsplash.jpg'
import Image2 from '../Assets/immo-wegmann-IigzKBfoGAM-unsplash.jpg'
import Image3 from '../Assets/julia-weihe-aMM2y4tGWgw-unsplash.jpg'

import classes from './Carousel.module.css'

const Carousel = () => {
    const [ left, setLeft ] = useState(0)
    const [ mid, setMid ] = useState(1)
    const [ right, setRight ] = useState(2)

    const getLocation = index => {
        if (left === index) {
            return 'Left'
        } else if (mid === index) {
            return 'Mid'
        } else {
            return 'Right'
        }
    }

    const setLocationHandler = () => {
        // left
        left < 2 ? setLeft(left + 1) : setLeft(0)

        // mid
        mid < 2 ? setMid(mid + 1) : setMid(0)
        
        // right
        right < 2 ? setRight(right + 1) : setRight(0)
    }

    const Items = [
        { 
            location: getLocation(0),
            src: Image1
        },
        { 
            location: getLocation(1),
            src: Image2
        },
        { 
            location: getLocation(2),
            src: Image3
        }
    ]

    return (
        <div className = { classes.Container }>
            {
                Items.map(item => 
                    <Item 
                        key = { item.location }
                        src = { item.src } 
                        location = { item.location }
                        clicked = { setLocationHandler } />)
            }
        </div>
    )
}

export default Carousel