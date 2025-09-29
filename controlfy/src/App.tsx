
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import DashboardPage from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route 
          path="/" 
          element={
            <PrivateRoute 
              element={<DashboardPage />}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
