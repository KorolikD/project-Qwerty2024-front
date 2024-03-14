import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store.js';
import App from './App.jsx';
import { GlobalStyle } from './styles/global.styled.js';
import theme from './styles/theme.js';
import { Toaster } from 'react-hot-toast';

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
