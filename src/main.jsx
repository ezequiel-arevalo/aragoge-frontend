import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import theme from '@/contexts/theme';
import '@/assets/css/global.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/aragoge-frontend/">
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);