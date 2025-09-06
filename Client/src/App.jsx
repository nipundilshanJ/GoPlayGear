
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SportGears from './pages/SportGears';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/sportgears" element={<SportGears />} />
            </Routes>
          </div>
          <BottomBar />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
