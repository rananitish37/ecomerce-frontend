import { ThemeProvider } from '@emotion/react';
import './App.css';
import Navbar from './customer/components/navbar/Navbar';
import './tailwind.output.css';
import customeTheme from './Theme/customeTheme';

function App() {
  return (
    
      <ThemeProvider  theme={customeTheme}>
        <div className="">
          <Navbar />
        </div>
      </ThemeProvider>
     
      
   
  );
}

export default App;
