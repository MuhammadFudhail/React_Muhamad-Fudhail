import React from "react";
import GoogleGenerativeAIChat from './GoogleGenerativeAIChat';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewPage from './NewPage';

function App() {
  return (
    <Router>
    <div>
     
  
      <Routes>
          <Route path="/" element={<GoogleGenerativeAIChat />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
    </div>

    </Router>
  )
}
export default App;