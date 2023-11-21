import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HashtagInput({ onAddHashtag }) {
  const [hashtag, setHashtag] = useState('');
  const navigate = useNavigate();

  const handleAddHashtag = () => {
    if (hashtag) {
      onAddHashtag(hashtag);
      setHashtag('');
    }
  };

  const handleBackToFeed = () => {
    navigate('/feed');
  };

  return (
    <div>
      <label>
        Inserisci Hashtag:
        <input
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddHashtag}>
        Aggiungi
      </button>
      <button type="button" onClick={handleBackToFeed}>
        Torna al Feed
      </button>
    </div>
  );
}

export default HashtagInput;
