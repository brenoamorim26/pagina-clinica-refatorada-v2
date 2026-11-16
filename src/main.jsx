import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: { main: '#167c68', dark: '#105b4d', light: '#e4f2eb' },
    secondary: { main: '#dc775f' },
    background: { default: '#f7f8f3', paper: '#ffffff' },
    text: { primary: '#203b36', secondary: '#65736e' },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: '"DM Serif Display", serif', fontWeight: 400 },
    h2: { fontFamily: '"DM Serif Display", serif', fontWeight: 400 },
    h3: { fontFamily: '"DM Serif Display", serif', fontWeight: 400 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 6, paddingInline: 20 } } },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 8 } } },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);