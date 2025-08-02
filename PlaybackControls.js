
import React from 'react';
import { FaPlay, FaPause, FaStop, FaDownload, FaRedo } from 'react-icons/fa';

const PlaybackControls = ({ handlePlay, handlePause, handleResume, handleStop, handleDownload }) => {
  return (
    <div className="playback-controls">
      <button onClick={handlePlay}><FaPlay /> Play</button>
      <button onClick={handlePause}><FaPause /> Pause</button>
      <button onClick={handleResume}><FaRedo /> Resume</button>
      <button onClick={handleStop}><FaStop /> Stop</button>
      <button onClick={handleDownload}><FaDownload /> Download</button>
    </div>
  );
};

export default PlaybackControls;

