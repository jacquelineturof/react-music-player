import React from 'react';
import './App.css';

import './icon.config'

import MusicPlayer from './components/MusicPlayer'

const music = [
  {
      backgroundColor: "Cyan"
  }
]

function App() {
  return (
    <div className="App">
      <MusicPlayer currentSong = { music[0] } />
    </div>
  );
}

export default App;
