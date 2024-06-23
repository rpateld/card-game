import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = document.getElementById('root');

if (root !== null) {
  const hydrate = root.hasChildNodes();
  const rootContainer = createRoot(root, { hydrate });

  rootContainer.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

reportWebVitals();