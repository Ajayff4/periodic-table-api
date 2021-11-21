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
        <Routes>
          <Route path="/" exact={true} component={<App />} />
          <Route path="/comp1" component={<Comp1 />} />
          <Route path="/comp2" component={<Comp2 />} />
          <Route path="/comp3" component={<Comp3 />} />
        </Routes>
        <Link to="/comp1">Comp1</Link>
        <Link to="/comp2">Comp2</Link>
        <Link to="/comp3">Comp3</Link>
      </BrowserRouter>
    </div>
  );
}