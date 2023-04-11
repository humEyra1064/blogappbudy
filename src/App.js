
import { blueGrey, grey } from '@mui/material/colors';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import AppRouter from './router/AppRouter';


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
        {/* <Provider store={store}> */}
      
          <AppRouter />
       
        {/* </Provider> */}
       
      </ThemeProvider>
    </>
  );
}

export default App;
