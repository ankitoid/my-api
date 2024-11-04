import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from '../src/Users/Form'; // Import the Form component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<App />} /> {/* Main page */}
        <Route path="/form" element={<Form />} /> {/* Form page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
