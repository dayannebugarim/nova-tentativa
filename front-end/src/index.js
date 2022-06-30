import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App'

import SideBar from './components/SideBar/SideBar'
import ProjetosGeral from './pages/ProjetosGeral/index'
import Projeto from './pages/Projeto';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBar /> 
      <Routes>
        <Route path='/projetos' element={<ProjetosGeral /> } />
        <Route path='/projetos/projeto' element={<Projeto /> } />
      </Routes>
      
    </BrowserRouter>
      
  </React.StrictMode>
);

reportWebVitals();
