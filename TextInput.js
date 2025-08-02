// src/components/TextInput.js
import React from 'react';

const TextInput = ({ text, setText, filename, setFilename }) => {
  return (
    <div className="text-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows={4}
        cols={50}
      />
      <div className="text-info">
        <span>{text.length}/3000 characters</span>
        <input
          type="text"
          placeholder="Filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;





