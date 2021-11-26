
import checkedLogo from './Vector.svg';
import uncheckedLogo from './Vector2.svg';
import * as S from '../styles';
interface PopupBottonProps{
    showing: boolean,
    logado:boolean
}

export default function BottonModal(props: PopupBottonProps){
    if(props.showing && props.logado){
        return(
            <S.BottonModalDivVerde>
                <img src={checkedLogo} alt="" />
                <p>Login efetuado com sucesso! Aguarde um momento enquanto atualizamos a página</p>
            </S.BottonModalDivVerde>
        )
    }else if (props.showing && !props.logado){ 
        return( 
            <S.BottonModalDivVermelho>
                <img src={uncheckedLogo} alt="" />
                <p>Erro ao realizar login. Verifique as credenciais e tente novamente</p>
            </S.BottonModalDivVermelho>
        )
    }else{
        return null;
    }
}