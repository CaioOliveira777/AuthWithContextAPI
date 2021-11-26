import{ useContext,useState } from "react";
import Cookies from 'universal-cookie';
import * as S from '../styles';
import { ThemeContext } from "styled-components";
import MenuLogin from "./menuLogin";
import Switch from './switch';

interface Props {
    toggleTheme: () => void,
    handleSubmit: (e) => void
}

const cookies = new Cookies();

export default function HeaderLogin(props: Props){     //{handleSubmit,toggleTheme}
    const {title} = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen); 
        }
    const darkLogin = cookies.get('token');
    return(
        <S.DarkSwitchDivDiv>
             <S.MenuToggle onClick={toggleModal} >
                 <S.Bars></S.Bars>
                 <S.Bars></S.Bars>
                 <S.Bars></S.Bars>
                 </S.MenuToggle>
                 <MenuLogin toggleTheme={props.toggleTheme} 
                 isOpen={isOpen} 
                 toggleModal={toggleModal}
                 handleSubmit={props.handleSubmit}
                 darkLogin={darkLogin} 
                 />    
                <S.DarkSwitchDivDivABC>
                    <S.DarkSwitchDiv>
                        <S.Switch>
                            <Switch title={title} toggleTheme={props.toggleTheme}/>
                            <span className="switch-text">Dark Mode</span>
                        </S.Switch>
                    </S.DarkSwitchDiv>
                    <S.DarkSwitchDivDivButton 
                    type="submit"
                    onClick={props.handleSubmit} >Fazer Login
                    </S.DarkSwitchDivDivButton>
                </S.DarkSwitchDivDivABC>
        </S.DarkSwitchDivDiv>
    )   
} 
