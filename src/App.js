import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './customer/components/navbar/Navbar';
import './tailwind.output.css';
import customeTheme from './Theme/customeTheme';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
// import Home from './customer/pages/Home/Home';
// import Product from './customer/pages/Product/Product';
// import ProductDetails from './customer/pages/Product Details/ProductDetails';

function App() {
  return (
    
      <ThemeProvider  theme={customeTheme}>
        <div className="">
          <Navbar />
          {/* <Home /> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Review /> */}
          <Cart />
        </div>
      </ThemeProvider>
     
      
   
  );
}

export default App;
// npx tailwindcss -i src/App.css -o src/tailwind.output.css --watch
// npm start