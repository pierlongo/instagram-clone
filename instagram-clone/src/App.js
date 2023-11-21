// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Feed from './Feed';
import HashtagInput from './Hashtag';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/hashtag" element={<HashtagInput />} />
      </Routes>
    </Router>
  );
}

export default App;
