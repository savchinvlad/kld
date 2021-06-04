import React from 'react';
import { useDispatch } from "react-redux";

import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
    return (
      <div className="wrapper">
        <Header />
       <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component = {Cart} exact/>
        </div>
     </div>
    );
}

export default App;
