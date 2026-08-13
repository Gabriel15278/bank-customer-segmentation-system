import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Predictor from './pages/Predictor';
import Segments from './pages/Segments';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}