import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { persistor, store } from './redux/store.js';
import { GlobalStyle } from './styles/global.styled.js';
import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/project-Qwerty2024-front">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
            <Toaster
              position="top-right"
              toastOptions={{
                error: {
                  style: {
                    background: theme.colors.black,
                    color: theme.colors.white,
                    border: `1px solid ${theme.colors.primary}`,
                  },
                },
              }}
            />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
