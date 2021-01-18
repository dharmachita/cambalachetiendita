import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ListaProductos from './components/lista-productos/lista-productos';
import Detail from './detail/index';
import Error404 from './components/Error404/error404';
import Category from './components/categorias/categorias';
import Footer from './components/footer/footer';
import ContextProvider from "./context/Context";
import Cart from './components/cart';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      
      <Navbar />

      <Switch>
        <Route exact path="/">
          <ListaProductos />
        </Route>
        <Route path="/categoria/:categoria_name?">
          <Category />
        </Route>
        
        <Route path="/detail/:id">
          <Detail />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
        
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>

      <Footer />

      
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
