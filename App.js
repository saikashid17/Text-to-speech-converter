import React, { useState, useRef } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import VoiceControls from './components/VoiceControls';
import PlaybackControls from './components/PlaybackControls';
import { synthesizeSpeech } from './awsPolly';

function App() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('Joanna');
  const [speed, setSpeed] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handlePlay = async () => {
    try {
      const audioStream = await synthesizeSpeech(text, voice, speed, pitch, volume);
      const audio = new Audio(URL.createObjectURL(new Blob([audioStream])));
      audioRef.current = audio;
      audio.play();
    } catch (err) {
      alert('Error occurred while playing text to speech!');
      console.error(err);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleResume = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleDownload = async () => {
    try {
      const audioStream = await synthesizeSpeech(text, voice, speed, pitch, volume);
      const blob = new Blob([audioStream], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'speech.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert('Error occurred while downloading!');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <TextInput text={text} setText={setText} />
      <VoiceControls
        voice={voice}
        setVoice={setVoice}
        speed={speed}
        setSpeed={setSpeed}
        pitch={pitch}
        setPitch={setPitch}
        volume={volume}
        setVolume={setVolume}
      />
      <PlaybackControls
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleResume={handleResume}
        handleStop={handleStop}
        handleDownload={handleDownload}
      />
    </div>
  );
}

export default App;




