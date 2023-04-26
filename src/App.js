import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { MyStory } from './pages/my-story';
import { OthersStory } from './pages/others-story';

import {db} from "./firebase.js";
import "firebase/compat/firestore";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(db)
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/others-story" element={<OthersStory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
