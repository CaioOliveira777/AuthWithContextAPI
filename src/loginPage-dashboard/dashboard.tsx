
import HeaderDash from '../header/headerDash';
import Cookies from 'universal-cookie';
import * as S from '../styles';
import { useUser } from "../UserContext";

const cookies = new Cookies();

interface Props {
    toggleTheme: () => void,
    verPerfil: () => void
}

export default function Dashboard(props: Props) {

    const {login, user} = useUser();
    login(cookies.get('login'), cookies.get('senha'));

    function logout(){
        cookies.remove('token');
        cookies.remove('login');
        cookies.remove('senha');
        window.location.reload();
    }   

    return (
        <S.TelaLogadoDivDiv>
             <HeaderDash verPerfil={props.verPerfil} toggleTheme={props.toggleTheme} handleSubmit={logout}/>  
            <S.TelaLogadoDiv>
                <S.TelaLogadoDivTitleDiv>   
                    <h1>Bem vind@ de volta,<br></br>{user?.name}</h1>
                </S.TelaLogadoDivTitleDiv>
                <S.FatEProj>
                    <S.Faturamento>
                        <h1>Faturamento</h1>
                        <h2>R$ {user?.revenues}</h2>
                    </S.Faturamento>
                    <S.Faturamento>
                        <h1>Projetos feitos</h1>
                        <h2>{user?.madeProjects}</h2>
                    </S.Faturamento>
                </S.FatEProj>
                <S.Galeria>
                    <h1>Galeria</h1>
                    <S.GaleriaDivDeBaixo>
                        <h1>Você ainda não possui fotos.<br></br>Que tal adicionar uma?</h1>
                        <div>Adicionar nova foto</div>
                    </S.GaleriaDivDeBaixo>
                </S.Galeria>
            </S.TelaLogadoDiv>
        </S.TelaLogadoDivDiv>
    );


}
