import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tela de login */}
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
