import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './contexts/menuContext';
import { CategoryProvider } from './contexts/seachCategories';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { SearchProvider } from './contexts/searchContext';
import { UserStorage } from './context/userContext';


const theme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
    bgColor: "#f4f4f4",
    borderColor: "#cccccc",
    primaryButton: "#1a75ff",
    hoverButton: "#005ce6",
    error: "red",
  },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <CategoryProvider>
          <SearchProvider>
            <UserStorage>
            <App />
          </UserStorage>
          </SearchProvider>  
        </CategoryProvider>
      </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  
    
    
  </React.StrictMode>
);


