import React from 'react';
import './App.scss';
import Cart from './Cart/Cart';
import Collections from './Collections/Collections';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="ecommerce">
      <header className="App-header">
         <Header />
          {/* <Home />
          <Collections /> */}
          <Cart />
         <Footer />
      </header>
    </div>
  );
}

export default App;
