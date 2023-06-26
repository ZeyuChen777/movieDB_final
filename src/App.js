import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Rated from './components/Rated';
import Login from './components/Login';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movie_id" element={<MovieDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
