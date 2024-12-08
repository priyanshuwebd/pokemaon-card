import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComA from './ComA';

// Create a root using the createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the ComA component
root.render(<ComA />);
