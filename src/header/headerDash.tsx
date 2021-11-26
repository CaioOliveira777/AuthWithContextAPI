import{ useContext,useState } from "react";
import avatar from './Avatar.svg';
import Cookies from 'universal-cookie';
import * as S from '../styles';
import { ThemeContext } from "styled-components";
import{ useUser } from "../UserContext";
import MenuDash from "./menuDash";
import Switch from './switch';



interface Props {
    toggleTheme: () => void,
    handleSubmit: (e) => void,
    verPerfil?: () => void
}


const cookies = new Cookies();

export default function HeaderDash(props: Props){     //{handleSubmit,toggleTheme}
    const {user} = useUser();
    const {title} = useContext(ThemeContext);



const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen); 
  }

    const darkLogin = cookies.get('token');
        return(
            <S.DarkSwitchDivDiv>
                <S.MenuToggle  onClick={toggleModal} >
                     <S.Bars></S.Bars>
                     <S.Bars></S.Bars>
                     <S.Bars></S.Bars>
                 </S.MenuToggle>
                 <MenuDash toggleTheme={props.toggleTheme}
                 isOpen={isOpen} 
                 toggleModal={toggleModal}
                 handleSubmit={props.handleSubmit}
                 darkLogin={darkLogin}
                 verPerfil = {props.verPerfil}
                 />
            <S.DarkSwitchDivDivABC>
                <S.DarkSwitchDiv>
                <S.Switch>
                <Switch title={title} toggleTheme={props.toggleTheme}/>
                     <span className="switch-text">Dark Mode</span>
                 </S.Switch>
                </S.DarkSwitchDiv>
            <S.UsuarioELogin>
                <S.Usuario>
                    <img onClick={props.verPerfil} src={avatar} alt="avatar" />
                    <S.UsuarioTitulo>
                        <h1 onClick={props.verPerfil}>{user?.name}</h1>
                        <h2>{user?.email}</h2>
                    </S.UsuarioTitulo>
                </S.Usuario>
                <S.DarkSwitchDivDivButton 
                    type="submit"
                    onClick={props.handleSubmit} >Fazer Logout
                </S.DarkSwitchDivDivButton>
            </S.UsuarioELogin>
        </S.DarkSwitchDivDivABC>
    </S.DarkSwitchDivDiv>
            
        )

    }
