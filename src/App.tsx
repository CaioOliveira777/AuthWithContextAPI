import LoginPage from './loginPage-dashboard/loginPage';
import Dashboard from './loginPage-dashboard/dashboard';
import GlobalStyles from './globalStyle';
import {MainScreenDiv} from './styles';
import { ModalProvider } from 'styled-react-modal';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import ThemeLight from './themes/theme-light';
import ThemeDark from './themes/theme-dark';
import Cookies from 'universal-cookie';
import usePersistedState from './usePersistedState';
import UserContext from './UserContext';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import RoutesPrivate from './privateRoutes';
import Profile from './profile/profile';
import BottonModal from './bottonModal/bottonModal';

const cookies = new Cookies();

function App() {
    const [logado,setLogado] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false);
    const [profile, setProfile] = useState(false);
    const popupVerde = () => {
      setLogado(true);
      setTimedPopup(true);
      setTimeout(() => {
        window.location.reload()
      },3000)
    }
    const popupVermelho = () => {
      setTimedPopup(true);
      setTimeout(() => {
        setTimedPopup(false);
      },3000)
    }
    const verPerfil = () => {
      setProfile(!profile);
    }
const checkToken = cookies.get('token');

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', ThemeLight);
    const toggleTheme = () => {
      setTheme(theme.title === 'theme-light' ? ThemeDark:ThemeLight);
    };

  return (
    <ThemeProvider theme={theme}>
      <UserContext>
      <GlobalStyles/>
        <ModalProvider>  
          <Router>
            <Switch>
              <div>
                <MainScreenDiv>
                  { checkToken && <Redirect to='/dashboard'/> }         
                  { checkToken ? profile ? <Redirect to='/profile'/> : <Redirect to='/dashboard'/> : <Redirect to='/login'/>  } 
                  <Route path="/login">
                    <LoginPage popupVerde={popupVerde} popupVermelho={popupVermelho} toggleTheme={toggleTheme}/>
                  </Route>
                  <Route path="/profile">
                    <Profile verPerfil={verPerfil} toggleTheme={toggleTheme}/>
                  </Route> 
                  <RoutesPrivate verPerfil={verPerfil} toggleTheme={toggleTheme} path="/dashboard" component={Dashboard}/>
                  <BottonModal showing={timedPopup} logado={logado}/>
                </MainScreenDiv>
              </div>
            </Switch>
          </Router>
        </ModalProvider>
      </UserContext>
    </ThemeProvider>
  );
}

export default App;
