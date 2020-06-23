import React from 'react'

import classes from './AlbumCoverCarousel1.module.css'

const Carousel = () => {
    return (
        <div className = { classes.Container }>
            <input type="radio" name="slider" id="item-1" className = { classes.Item1 } checked />
            <input type="radio" name="slider" id="item-2" className = { classes.Item2 } />
            <input type="radio" name="slider" id="item-3" className = { classes.Item3 }/>
            <div className = { classes.Cards }>
                <label className = { classes.Card } for="item-1" className = { classes.Song1 }>
                    <img 
                        src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" 
                        alt="song"
                        className = { classes.Image }/>
                </label>
                <label className = { classes.Card } for="item-2" className = { classes.Song2 }>>
                    <img 
                        src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" 
                        alt="song"
                        className = { classes.Image } />
                </label>
                <label className = { classes.Card } for="item-3" className = { classes.Song3 }>>
                    <img 
                        src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
                        alt="song"
                        className = { classes.Image } />
                </label>
            </div>
        </div>
    )
}

export default Carousel