import React from 'react';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/';
import Planning from './pages/Planning';
import Signup from './pages/signup';
function App() {
  return (
      <Router>
      {/* <Navbar /> */}
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/planning' element={<Planning/>} />
          <Route path='/signup' element={<Signup/>} />

      </Routes>
      </Router>
  );
  }



export default App;
