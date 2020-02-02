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
      url={getSound('SpaceJunk_demo.mp3')}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      loop={true}
    />
  );
  }
}
export default MyComponentWithSound