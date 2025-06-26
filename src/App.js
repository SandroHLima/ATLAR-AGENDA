import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Api from './pages/App';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/auth" element={<Api />} />
      </Routes>
    </Router>
  );
};

export default App;
