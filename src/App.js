import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './componentes/Navbar';
import ProductList from './componentes/ProductList';
import Details from './componentes/Details';
import Cart from './componentes/Cart';
import Page404 from './componentes/Page404';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Page404 />
      </React.Fragment>
    );
  }
}

export default App;
