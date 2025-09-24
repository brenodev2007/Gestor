import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/components/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tela de login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
