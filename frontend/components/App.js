import React from 'react';
import Home from './Home';
import Form from './Form';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <div id="app">
        <nav>
          <NavLink to="/" exact="true">Home</NavLink>
          <NavLink to="/order" exact="true">order</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Form />} />
        </Routes>
      </div>
  
  );
}

export default App