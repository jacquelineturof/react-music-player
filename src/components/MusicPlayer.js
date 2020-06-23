import React, { useState } from 'react'

import AlbumCoverCarousel from './Carousel'
import MusicControl from './MusicControl'

import classes from './MusicPlayer.module.css'

const MusicPlayer = ({ currentSong }) => {
    const { backgroundColor } = currentSong
    const [ percentage, setPercentage ] = useState(90)

    return (
        <div className = { [ classes.Container, classes[backgroundColor ] ].join(' ') }>
            <AlbumCoverCarousel />
            <MusicControl percentage = { percentage } />
        </div>
    )
}

export default MusicPlayer