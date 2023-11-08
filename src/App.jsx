import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import NotFound from './views/NotFound';
import ProviderAPI from './context/ContextAPI';

function App() {

  return (
    <>
    <ProviderAPI>
        <Navbar />
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home />} />            
            <Route path='/pokemones' element={<Pokemones />} />
            <Route path='/pokemones/:nombre' element={<Pokemones />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </ProviderAPI>
    </>
  );
};

export default App;
