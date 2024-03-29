
import './App.css';
import MainRoute from './routes/MainRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@emotion/react';
import { SpeedDial, SpeedDialIcon, createTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useCallback, useState } from 'react';
import PrintIcon from '@mui/icons-material/Print';
function App() {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: 'dark',
    },
  }))
  const [mode, setMode] = useState('dark');
  const handleTheme = () => {
    // alert(mode)
    if (mode === 'light') {
      setMode('dark');
      setTheme(createTheme({
        palette: {
          mode: 'dark',
        },
      }))
    } else {
      setMode('light');
      setTheme(createTheme({
        palette: {
          mode: 'light',
        },
      }))
    }
  }
  const printDocument = useCallback(() => {
    window.print();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        fixed  
      >
        <SpeedDialAction
          icon={mode=='light' ?<LightModeOutlinedIcon/> :<DarkModeIcon/>}
          onClick={handleTheme}
          tooltipTitle={'sang/toi'}
        />
        <SpeedDialAction

          icon={<PrintIcon/>}
          onClick={printDocument}
          tooltipTitle={'in'}
        />

      </SpeedDial>
      <div className="App">
        <ToastContainer />
        <MainRoute />
      </div>
    </ThemeProvider>
  );
}

export default App;
