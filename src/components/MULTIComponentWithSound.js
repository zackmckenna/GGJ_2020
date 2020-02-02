import React from 'react';
import Sound from 'react-sound';


const Chords = new Array("CHORDS1.mp3", "CHORDS2.mp3", "CHORDS3.mp3");
const Drums = new Array("DRUMS1.mp3","DRUMS2.mp3","Drums3.mp3");
const FX = new Array("FX1.mp3","FX2.mp3","FX3.mp3")

function getSound(name, path) {
    path = path || '/music/stems/'; // default path here
    var soundStr = process.env.PUBLIC_URL + path + name;
    return soundStr;
}

class MULTIComponentWithSound extends React.Component {

  render() {
    return (<>
    <Sound
      url={getSound(Chords[Math.floor( Math.random() * Chords.length )])}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    />
    <Sound
      url={getSound(Drums[Math.floor( Math.random() * Drums.length )])}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    />
    <Sound
      url={getSound(FX[Math.floor( Math.random() * FX.length )])}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    /></>
  );
  }
}
export default MULTIComponentWithSound
