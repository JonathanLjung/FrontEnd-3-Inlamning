import Navbar from './Navbar';
import Home from './pages/Home';
import Sell from './pages/Sell'
import { Route, Routes } from 'react-router-dom';

function App() {
 return (
  <>
  <Navbar />
  
  <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<Sell />} path='/sell'/>
  </Routes>
    </>
  );
}

export default App;
