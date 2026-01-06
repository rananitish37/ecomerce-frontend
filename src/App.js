import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './customer/components/navbar/Navbar';
import './tailwind.output.css';
import customeTheme from './Theme/customeTheme';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import Review from './customer/pages/Review/Review';
import { Route, Routes } from 'react-router-dom';
import Cart from './customer/pages/Cart/Cart';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Product Details/ProductDetails';

function App() {
  return (
    
      <ThemeProvider  theme={customeTheme}>
        <div className="">
          <Navbar />
          {/* <Home /> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Review /> */}
          {/* <Cart /> */}
          {/* <Checkout /> */}
          {/* <Account/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/*' element={<Account/>}/>

          </Routes>
        </div>
      </ThemeProvider>
     
      
   
  );
}

export default App;
// npx tailwindcss -i src/App.css -o src/tailwind.output.css --watch
// npm start