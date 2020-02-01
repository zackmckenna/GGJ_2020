import React from 'react';
import Sound from 'react-sound';
 

function getSound(name, path) {
    path = path || '/music/'; // default path here
    var soundStr = process.env.PUBLIC_URL + path + name;
    return soundStr;
}


class MyComponentWithSound extends React.Component {



  render() {
    return (
    <Sound
      url={getSound('spacejazz_demo1.mp3')}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
  }
}
export default MyComponentWithSound