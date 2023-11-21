import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HashtagInput from './Hashtag';

function Feed() {
  const [hashtags, setHashtags] = useState([]);
  const navigate = useNavigate();

  const handleAddHashtag = (hashtag) => {
    setHashtags([...hashtags, hashtag]);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Feed</h2>
        <ul>
          {hashtags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul>
      </div>
      <HashtagInput onAddHashtag={handleAddHashtag} />
    </div>
  );
}

export default Feed;
