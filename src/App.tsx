/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Sui from './pages/Sui';
import Aptos from './pages/Aptos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swap" element={<Home />} />
      <Route path="/sui" element={<Sui />} />
      <Route path="/aptos" element={<Aptos />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
