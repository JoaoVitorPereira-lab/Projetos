import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Calculadora from './pages/calculadora'
import Clima from './pages/clima'
import CloneWhats from './pages/clonewhats'
import Loja from './pages/loja'
import Musica from './pages/musica'
import Portfolio from './pages/portfolio'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/'             element={<Calculadora />} />
        <Route path='/clima'        element={<Clima />} />
        <Route path='/clonewhats'   element={<CloneWhats />} />
        <Route path='/loja'         element={<Loja />} />
        <Route path='/musica'       element={<Musica />} /> 
        <Route path='/portfolio'    element={<Portfolio />} />        
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
