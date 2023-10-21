import Header from './components/Header';
import ShoeForm from './components/ShoeForm';
import './App.css';
import ShoeCatalogue from './components/ShoeCatalogue';
import CartProvider from './store/CartProvider';
import ShoeCart from './components/ShoeCart';

function App() {
  return (
    <CartProvider>
      <Header/>
      <ShoeForm/>
      <ShoeCatalogue/>
      <ShoeCart/>
    </CartProvider>
  );
}

export default App;
