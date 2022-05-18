import React from 'react';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Menu/>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/details/:article" element={<Details/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
