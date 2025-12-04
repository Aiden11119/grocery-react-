import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, createContext } from 'react';

import Home from './Home';
import Buy from './Buy';
import Cart from './Cart';
import Navbar from './navigationlist';
import Login from './login';
import Register from './register';
import Profile from './profile';

// 创建 Context
export const CartContext = createContext();
export default function App() {

  
  const [CurrentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("CurrentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  //这个cartitem 是要用在usecotext全局的
  const [cartItems, setCartItems] = useState([]);

  const [page, setPage] = useState('login'); // 默认显示登录页

  // 页面刷新 / 浏览器返回时，根据 URL 设置初始页面
  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (['home', 'buy', 'cart', 'login', 'register','profile'].includes(path)) {
      setPage(path);
    } else {
      setPage('login');
      window.history.replaceState({ page: 'login' }, '', '/login');
    }

    const handlePopState = (event) => {
      setPage(event.state?.page || 'login');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


  useEffect(() => {
    if (CurrentUser) {
      const saved = localStorage.getItem(`cart_${CurrentUser.name}`);
      setCartItems(saved ? JSON.parse(saved) : []);
    } else {
      setCartItems([]);
    }
  }, [CurrentUser]);

  
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'buy':
        return <Buy />;
      case 'cart':
        return <Cart />;
      case 'login':
        return <Login setPage={setPage} />;
      case 'register':
        return <Register setPage={setPage} />;

      case 'profile':
          return <Profile setPage={setPage} />;
  
      default:
        return <Login setPage={setPage} />;
    }
  };

  // Navbar 在登录后显示
  const showNavbar = ['home', 'buy', 'cart','profile'].includes(page);

  return (
    <CartContext.Provider value={{ 
        cartItems, 
        setCartItems, 
        CurrentUser, 
        setCurrentUser 
    }}>
      {showNavbar && <Navbar currentPage={page} setPage={setPage} />}
      {renderPage()}
    </CartContext.Provider>
  );
}
