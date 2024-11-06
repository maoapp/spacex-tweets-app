// src/main.tsx
import { createRoot } from 'react-dom/client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { Toaster } from './components/ui/toaster';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container not found. Make sure 'index.html' has a div with id 'root'.");
}

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ChakraProvider value={defaultSystem}>
      <App />
      <Toaster />
    </ChakraProvider>
  </Provider>,
);
