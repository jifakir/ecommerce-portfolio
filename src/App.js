import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Cart from './Cart/Cart';
import Collections from './Collections/Collections';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="ecommerce">
        <header className="App-header">
          <Header />
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/collection/:id' exact>
                <Collections />
              </Route>
          <Cart />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
