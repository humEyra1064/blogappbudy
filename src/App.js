
import { blueGrey, grey } from '@mui/material/colors';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import AppRouter from './router/AppRouter';
import { CssBaseline } from '@mui/material';
import store, { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>

        <Provider store={store}>
        <CssBaseline/>
           <PersistGate loading={null} persistor={persistor}>
             <AppRouter />
           </PersistGate>
        </Provider>
        <ToastContainer/>
       
      </ThemeProvider>
    </>
  );
}

export default App;
