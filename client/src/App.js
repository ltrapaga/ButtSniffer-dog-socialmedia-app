import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';

import PageHeader from './components/PageHeader';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <StrictMode>
    <AuthProvider>
      <Router>
        <Container> 
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
    </StrictMode>
  );
}

export default App;
