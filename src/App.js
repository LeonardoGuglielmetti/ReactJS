import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import Item from './components/ItemList/Item';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartContext from "./components/Cart/CartContext";
import Cart from './components/ItemList/Cart';
import { Footer } from './components/ItemList/Footer';


function App() {
  // const [amountItems, setAmountItems] = useState(0);
  return (
    <>
    
      <CartContext>
      <BrowserRouter> 
      <NavBar/>  
     
      
      <Routes>
      
      
      <Route index ="/" element={<ItemListContainer/>}/>
        <Route path="/category/:name" element={<ItemListContainer/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        
        <Route 
          path="*"
          element={<div style={{ backgroundColor: "red" }}>
          {" "}
          ERROR 404 NOT FOUND
        </div>
      } />
          
        
        
        
    </Routes>
    <Footer/>
    </BrowserRouter>

    </CartContext>
    
  </>
  );

}

export default App; 