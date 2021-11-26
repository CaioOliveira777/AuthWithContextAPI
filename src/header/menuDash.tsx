import { useContext } from "react";
import avatar from './Avatar.svg';
import { ThemeContext } from "styled-components";
import Switch from './switch';
import * as S from '../styles';
import { useUser } from "../UserContext";


interface Props {
    isOpen: boolean,
    toggleModal: () => void,
    handleSubmit: (e) => void,
    darkLogin: boolean,
    toggleTheme: () => void,
    verPerfil?: () => void
}

export default function MenuDash(props: Props){
    const {user} = useUser();
    const {title} = useContext(ThemeContext);
        return( 
        <S.StyledModal 
            isOpen={props.isOpen}
            onRequestClose={props.toggleModal}
            onBackgroundClick={props.toggleModal}
            onEscapeKeydown={props.toggleModal}
            closeTimeoutMS={0}
          >
          <S.DarkSwitchDiv>
                      <S.Switch>
                      <Switch title={title} toggleTheme={props.toggleTheme}/>
                          <span className="switch-text">Dark Mode</span>
                      </S.Switch>
                  </S.DarkSwitchDiv>
                  <S.Usuario>
                    <img onClick={props.verPerfil} src={avatar} alt="avatar" />
                    <S.UsuarioTitulo>
                        <h1 onClick = {props.verPerfil}>{user?.name}</h1>
                        <h2>{user?.email}</h2>
                    </S.UsuarioTitulo>
                </S.Usuario>
                  <S.DarkSwitchDivDivButton
                  type="submit"
                  onClick={props.handleSubmit} >Fazer Logout
                  </S.DarkSwitchDivDivButton>
              </S.StyledModal>
              )
    }
