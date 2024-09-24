import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { App } from "./App.jsx";
import store from '@/redux/store';
import theme from '@/contexts/theme';
import '@/assets/css/global.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/aragoge-frontend/">
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
