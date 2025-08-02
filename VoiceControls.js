import React from 'react';
import { FaGlobe, FaMicrophone, FaTachometerAlt, FaVolumeUp } from 'react-icons/fa';

const VoiceControls = ({ voice, setVoice, speed, setSpeed, pitch, setPitch, volume, setVolume }) => {
  return (
    <div className="voice-controls">
      <label><FaGlobe /> Language & Voice</label>
<select value={voice} onChange={(e) => setVoice(e.target.value)}>
  <optgroup label="🇺🇸 English (US)">
    <option value="Joanna">Joanna (Female)</option>
    <option value="Matthew">Matthew (Male)</option>
  </optgroup>

  <optgroup label="🇬🇧 English (UK)">
    <option value="Emma">Emma (Female)</option>
    <option value="Brian">Brian (Male)</option>
  </optgroup>

  <optgroup label="🇮🇳 English (India)">
    <option value="Aditi">Aditi (Female)</option>
    <option value="Raveena">Raveena (Female)</option>
    <option value="Karan">Karan (Male)</option>
  </optgroup>

  <optgroup label="🇮🇳 Hindi / हिन्दी">
    <option value="Kajal">Kajal (Female)</option>
    <option value="Rohit">Rohit (Male)</option>
  </optgroup>

  <optgroup label="🇩🇪 German / Deutsch">
    <option value="Marlene">Marlene (Female)</option>
    <option value="Hans">Hans (Male)</option>
  </optgroup>

  <optgroup label="🇫🇷 French / Français">
    <option value="Celine">Celine (Female)</option>
    <option value="Mathieu">Mathieu (Male)</option>
  </optgroup>

  <optgroup label="🇪🇸 Spanish / Español">
    <option value="Lucia">Lucia (Female)</option>
    <option value="Ricardo">Ricardo (Male)</option>
  </optgroup>

  <optgroup label="🇯🇵 Japanese / 日本語">
    <option value="Mizuki">Mizuki (Female)</option>
    <option value="Takumi">Takumi (Male)</option>
  </optgroup>
</select>



      <label><FaTachometerAlt /> Speed</label>
      <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={(e) => setSpeed(e.target.value)} />

      <label><FaMicrophone /> Pitch</label>
      <input type="range" min="0" max="2" step="0.1" value={pitch} onChange={(e) => setPitch(e.target.value)} />

      <label><FaVolumeUp /> Volume</label>
      <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(e.target.value)} />
    </div>
  );
};

export default VoiceControls;

