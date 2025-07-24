import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
