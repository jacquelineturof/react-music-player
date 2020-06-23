import React from 'react'

import Image1 from '../Assets/mercedes-schulz-j0ygyRIaHtI-unsplash.jpg'
import Image2 from '../Assets/immo-wegmann-IigzKBfoGAM-unsplash.jpg'
import Image3 from '../Assets/julia-weihe-aMM2y4tGWgw-unsplash.jpg'

import classes from './AlbumCoverCarousel.module.css'

const AlbumCoverCarousel = () => {
    return (
        <div className = { classes.Container }>
            <div className = { classes.Left }>
                <img src = { Image2 } className = { [ classes.Image, classes.Blur ].join(' ') } />
            </div>
            <div className = { classes.Mid }>
                <img src = { Image1 } className = { classes.Image } />
            </div>
            <div className = { classes.Right }>
                <img src = { Image3 } className = { [ classes.Image, classes.Blur ].join(' ') } />
            </div>
        </div>
    )
}

export default AlbumCoverCarousel