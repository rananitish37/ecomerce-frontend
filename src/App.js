import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './customer/components/navbar/Navbar';
import './tailwind.output.css';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';

function App() {
  return (
    
      <ThemeProvider  theme={customeTheme}>
        <div className="">
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
     
      
   
  );
}

export default App;
// npx tailwindcss -i src/App.css -o src/tailwind.output.css --watch
// npm start