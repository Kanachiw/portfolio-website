import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import GraphicDesign from './pages/graphicDesign.js'
import EngineeringProjects from './pages/engineeringProjects.js'
import DataAnalytics from './pages/dataAnalytics';
import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /* <React.StrictMode>
    <App />
  </React.StrictMode>*/
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/graphicDesign" element={<GraphicDesign />} />
    <Route path="/engineeringProjects" element={<EngineeringProjects/>} />
    <Route path="/dataAnalytics" element={<DataAnalytics/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
