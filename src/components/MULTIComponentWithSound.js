import React, { useEffect, useState } from 'react'
import Sound from 'react-sound';


const Chords = new Array("CHORDS1.mp3", "CHORDS2.mp3", "CHORDS3.mp3");
const Drums = new Array("DRUMS1.mp3","DRUMS2.mp3","Drums3.mp3");
const FX = new Array("FX1.mp3","FX2.mp3","FX3.mp3")



function getSound(name, path) {
    path = path || '/music/stems/'; // default path here
    var soundStr = process.env.PUBLIC_URL + path + name;
    return soundStr;
}



function MULTIComponentWithSound(){

  const[chordsTrack, setChordsTrack] = useState(getSound(Chords[Math.floor( Math.random() * Chords.length )]))
  const[drumsTrack, setDrumsTrack] = useState(getSound(Drums[Math.floor( Math.random() * Drums.length )]))
  const[fxTrack, setFxTrack] = useState(getSound(FX[Math.floor( Math.random() * FX.length )]))

  useEffect(() => {
      setChordsTrack(getSound(Chords[Math.floor( Math.random() * Chords.length )]))
      setDrumsTrack(getSound(Drums[Math.floor( Math.random() * Drums.length )]))
      setFxTrack(getSound(FX[Math.floor( Math.random() * FX.length )]))
    }, [])


    return (<>
    <Sound
      url={chordsTrack}
      playStatus={Sound.status.PLAYING}
      loop={true}
    />
    <Sound
      url={drumsTrack}
      playStatus={Sound.status.PLAYING}
      loop={true}
    />
    <Sound
      url={fxTrack}
      playStatus={Sound.status.PLAYING}
      loop={true}
    /></>
  );

}
export default MULTIComponentWithSound
