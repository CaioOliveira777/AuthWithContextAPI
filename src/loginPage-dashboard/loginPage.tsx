import React from "react";
import Cookies from 'universal-cookie';
import HeaderLogin from '../header/headerLogin';
import { useState} from "react";
import {useUser} from '../UserContext';
import Eye from './Eye.svg';
import Eye2 from './EyeSlash.svg';
import * as S from '../styles';

interface Props {
    toggleTheme: () => void,
    popupVermelho: () => void,
    popupVerde: () => void
}

const cookies = new Cookies();

export default function LoginPage(props:Props) {
    const {login,loginFake} = useUser();
  
    const [formValues, setFormValues] = useState({ email: '', senha: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTimeout(function(){handleSubmitTimeout()},1500);
    }

    function handleSubmitTimeout(){
        cookies.set('login', formValues.email, { path: '/' });
        cookies.set('senha', formValues.senha, { path: '/' });
        login(cookies.get('login'),cookies.get('senha'));
        window.location.reload();
    }
    
    const modalActivation = () => {
        if (loginFake(formValues.email,formValues.senha)) {
            props.popupVerde()
            
        } else {
            props.popupVermelho()
        }
    }

    const [isRevealed, setReveal] = useState(false);
    function handlePasswordReveal() {
        setReveal(!isRevealed);
    }

        return (
        <S.FormsDivDiv>
            <HeaderLogin toggleTheme={props.toggleTheme} handleSubmit={handleSubmit}/>
            <S.FormsDiv>
                <S.FormTitleDiv>
                    <h1>Fazer login</h1>
                    <h2>Bem-vind@ de volta! Sentimos <br></br>sua falta!</h2>
                </S.FormTitleDiv>
                    <S.FormsBody onSubmit={handleSubmit}>
                        <label>E-mail</label>
                        <input placeholder="fulano@infojr.com.br" id="formEmail" name="email" type="email"
                                onChange={handleInputChange} value={formValues.email || ''} />
                        <label>Senha</label>
                        <input placeholder="Sua senha" id="formPassword" 
                                name="senha" type={isRevealed ? "text" : "password"}
                                onChange={handleInputChange} value={formValues.senha || ''} />
                    <S.PasswordReveal onClick={handlePasswordReveal} type="button">
                        <img src={!isRevealed ? Eye : Eye2} alt="" />
                    </S.PasswordReveal>
                    <S.FormsButton type="submit"
                    onClick={modalActivation} >
                        Fazer login
                    </S.FormsButton>
                    </S.FormsBody>
                </S.FormsDiv>
           </S.FormsDivDiv>
            
        )
        } 


