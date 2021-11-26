import HeaderDash from '../header/headerDash';
import Cookies from 'universal-cookie';
import * as S from '../styles';
import avatar2 from './Avatar2.svg';
import lock from './Lock.svg';
import gato from './gatinhoFofo.jpg';
import ProgressBar from './progressBar';
import { useUser } from "../UserContext";


const cookies = new Cookies();
interface Props {
    toggleTheme: () => void,
    verPerfil: () => void
}

export default function Profile(props: Props) {
    const {login, user} = useUser();
    login(cookies.get('login'), cookies.get('senha'));
    function logout(){
        cookies.remove('token');
        cookies.remove('login');
        cookies.remove('senha');
        window.location.reload();
    }

    return(
        <S.ProfileDiv>
            <HeaderDash verPerfil={props.verPerfil} toggleTheme={props.toggleTheme} handleSubmit={logout} />
            <S.ProfileStats>
                <S.ProfileStatsImgTitle>
                    <img src={avatar2} alt="avatar2"/>
                    <h1>{user?.name}</h1>
                    <h2>{user?.email}</h2>
                </S.ProfileStatsImgTitle>
                <S.ProfileStatsProgressesBar>
                    <h1>Perfomance</h1>
                    <S.ProfileStatsProgressesBarDiv>
                        <ProgressBar progress={50}/>
                        <h1>50% dos projetos concluídos</h1>
                        <ProgressBar progress={94}/>
                        <h1>94% de qualidade de código</h1>
                        {
                            user?.premium ? 
                            <S.ProfileStatsProgressesBarDivPremium> 
                                <img className="imagem2" src={gato} alt="lock" /> 
                            </S.ProfileStatsProgressesBarDivPremium>
                            : 
                            <S.ProfileStatsProgressesBarDivPremium>
                                <img className="imagem1" src={lock} alt="lock" />
                                <h1>Para ter acesso à mais<br></br>métricas, é necessário<br></br>ser assinante do plano premium</h1>
                            </S.ProfileStatsProgressesBarDivPremium>}
                        
                    </S.ProfileStatsProgressesBarDiv>
                </S.ProfileStatsProgressesBar>
            </S.ProfileStats>
        </S.ProfileDiv>
    );
}