import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Fallback route - redirects to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;