import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

export default function Header() {
  return (
    <div className="side-bar">
      <BrowserRouter>
        <ul>
          <li><Link to="/comp1">Comp1</Link></li>
          <li><Link to="/comp2">Comp2</Link></li>
          <li><Link to="/comp3">Comp3</Link></li>
        </ul>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="/comp1" element={<Comp1 />}/>
          <Route path="/comp2" element={<Comp2 />}/>
          <Route path="/comp3" element={<Comp3 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}