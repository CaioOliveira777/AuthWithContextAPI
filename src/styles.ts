import styled from 'styled-components';
import Modal from 'styled-react-modal'
//@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
export const MainScreenDiv = styled.div `
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.darkBackground} ; //var(--dark-background)
    display: flex;
    flex-direction: column;
`;

export const FormsDivDiv = styled.div `
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.darkBackground}; //var(--dark-background)
    display: flex;
    flex-direction: column;
`;

export const FormsDiv = styled.div `
margin-top: 7.8vh;
display: flex;
flex-direction: column;
align-self: center;
background: ${props => props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
width: 30vw;
height: 70vh;
box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.04), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0238443), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0161557);
border-radius: 30px;
@media (max-width: 768px) {
  margin-top: 7vh;
        width: 50vw;
        height: 70vh;
}
@media (max-width: 426px) {
  margin-top: 6.7vh;
          width: 65vw;
          height:70vh;
}
@media (max-width: 376px) {          
  margin-top: 6.7vh;
          width: 73vw;
}
@media (max-width: 321px) {
  margin-top: 6.7vh;
          width: 79vw;
}
`;

export const FormTitleDiv = styled.div `

display: flex;
flex-direction: column;
width: 100%;
height: 15%;
align-self: center;
align-content: center;
justify-content: center;
margin-top: 14%;
h1 {
  font-family: Sora;
font-style: normal;
font-weight: bold;
font-size: 2.2rem;
line-height: 2.7rem;
color: ${props => props.theme.colors.darkTextForms}; //var( --dark-text-forms)
align-self: center;
}
h2 {
  font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 1rem;
line-height: 1.7rem;
text-align: center;
margin-top: 2.5%;
color: #B2B3BF;
}
`;

export const FormsBody = styled.form `
display: flex;
flex-direction: column;
width: 75%;
height: 53%;
align-content: center;
justify-content: center;
align-self: center;
margin-top: 7%;
label {
  font-family: Sora;
font-style: normal;
font-weight: bold;
font-size: 0.7rem;
line-height: 1.1rem;
align-self: flex-start;
color: ${props=>props.theme.colors.darkTextForms}; //var(--dark-text-forms)
background: ${props=>props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
z-index: 10;
margin-bottom: -4.7%;
margin-left: 2%;
padding-left: 1%;
padding-right: 1%;
margin-top: 4%;
}
input {
  background: ${props=> props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
border: 1.7px solid #B2B3BF;
box-sizing: border-box;
border-radius: 4px;
font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 0.8rem;
line-height: 1.8rem;
display: flex;
align-items: center;
color: ${props=>props.theme.colors.darkTextForms} ; //var(--dark-text-forms)
height: 17%;
width: 100%;
align-self: center;
align-content: center;
justify-content: center;
margin-top: 2%;
padding-left: 2%;
}
`;

export const PasswordReveal = styled.button `
    width: 0;
    height: 0;
    position: absolute;
    top: 57.9vh;
    right: 41vw;
    z-index: 10;
      @media (max-width: 768px) { 
        top: 55.8vh;
        right: 35vw;
      }
      @media (max-width: 426px) {
          top: 52.7vh;
          right: 32.6vw;
      }
      @media (max-width: 376px) { 
          top: 52.3vh;
          right: 31.6vw;
      }
      @media (max-width: 321px) {
          top: 51.9vh;
          right: 31vw;
      }


`;

export const FormsButton = styled.button `
    display: flex;
    flex-direction: row;
    align-self: center;
    align-content: center;
    justify-content: center;
    background: #A6BFFD;
    border-radius: 8px;
    font-family: Sora;
    font-style: normal;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 2.6rem;
    align-items: center;
    text-align: center;
    color: #0147FA;
    width: 100%;
    height: 20%;
    margin-top: 18%;
    &:hover {
      background: #0147FA;
      color: #FFFFFF;
    }
`;


export const DarkSwitchDivDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    background: ${props => props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
    border-radius: 20px;
    width: 64vw;
    height: 7.5vh;
    margin-top: 3vh;
    @media (max-width: 426px){
      width: 80vw;
    }
  `;

export const MenuToggle = styled.button `
  display: none;
    @media (max-width: 426px) {
        display: flex;
        flex-direction: column;
        height: 42%;
        width: 9%;
        margin-left: 85%;
        align-self: center;
        margin-top: 1vh;
        background-color: #ffffff00;
  }
`;


export const DarkSwitchDivDivABC = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
    border-radius: 20px;
    @media (max-width: 426px) {
      display: none;
    }

`;

export const Bars = styled.div `
        background-color: ${props=>props.theme.colors.darkTextForms}  ; //var(--dark-text-forms)
        height: 0.3vh;
        width: 100%;
        margin: 0.19vh auto;
  `;

export const DarkSwitchDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: 11vw;
    height: 4.7vh;
    align-self: center;
    align-items: center;
    margin-left: 1.8vw;
    justify-items: center;
    @media (max-width: 768px) {
      width: 13vw;
        align-self: center;
    }
    @media (max-width: 426px) {
      width: 23vw;
    }
    @media (max-width: 321px) {
        width: 26vw;
    }

`;

export const DarkSwitchDivDivButton = styled.button `

border: 2px solid #0147FA;
box-sizing: border-box;
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
width: 6.7vw;
height: 4.7vh;
align-self: center;
margin-right: 1vw;
background: ${props => props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
align-content: center;
justify-content: center;
font-family: Sora;
font-style: normal;
font-weight: bold;
font-size: 0.7rem;
line-height: 2.5rem;
display: flex;
align-items: center;
text-align: center;
color: #0147FA;
&:hover{
  background: #0147FA;
  color: #FFFFFF;
}
@media (max-width: 768px) {
  width: 7.2vw;
        margin-right: 1.7vw;
}
@media (max-width: 426px) {
  width: 16.9vw;
        height: 4.9vh;
        margin-top: 5%;
}

`;

export const Switch = styled.label `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .switch-text{
      font-family: Sora;
      font-style: normal;
      font-weight: normal;
      font-size: 0.9rem;
      line-height: 1.7rem;
      padding-left: 0.7rem;
      display: flex;
      align-items: center;
      color: ${props=>props.theme.colors.darkTextForms} ; //var(--dark-text-forms)
    }
`;

export const StyledModal = Modal.styled `
  display: none;
  @media (max-width: 426px) {
    display: flex;
        flex-direction: column;
        position: absolute;
        top: 13vh;
        left: 8.2vw;
        background: ${props=>props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
        box-shadow: 0px 13.6207px 29.2897px rgba(14, 42, 14, 0.196715), 0px 4.27365px 7.95718px rgba(14, 42, 14, 0.33);
        border-radius: 20px;
        width: 85vw;
        height: 26vh;
        z-index: 10;
        align-self: center;
        align-items: center;
        align-content: center;
        justify-content: center;
  };

`;

export const UsuarioELogin = styled.div `

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
align-self: flex-end;
width: 38%;
height: 100%;
@media (max-width: 768px) {
  width: 45%;
}
`;

export const Usuario = styled.div `
    display: flex;
    flex-direction: row;    
    height: 100%;
    width: 60%;
    align-items: center;
    @media (max-width: 426px) {
        flex-direction: column;    
        height: 40%;
        width: 100%;
        align-items: center;
        align-self: center;
        align-content: center;
        justify-content: center;
    }
`;


export const UsuarioTitulo = styled.div `
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 68%;
    align-self: center;

@media (max-width: 768px){
    width: 72%;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
}

@media (max-width: 426px) {
  width: 100%;
        align-items: center;
        align-self: center;
        justify-content: center;
        align-content: center;
        text-align: center;
}

  h1  {
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.4rem;
    display: flex;
    align-items: center;
    margin-left: 5%;
    text-align: center;
    color: ${props=> props.theme.colors.darkTextForms} ; //var( --dark-text-forms)
    @media (max-width: 426px) {
      margin-left: 0%;
    }
  }

  h2{
    font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 0.7rem;
line-height: 1rem;
display: flex;
align-items: center;
margin-left: 5%;
text-align: center;
color: #B2B3BF;
@media (max-width: 426px) {
      margin-left: 0%;
    }
  }
`;

export const TelaLogadoDivDiv = styled.div `
    width: 100vw;
    height: 100vh;
    background: ${props=>props.theme.colors.darkBackground} ; //var(--dark-background)
    display: flex;
    flex-direction: column;
`;

export const TelaLogadoDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
    width: 64vw;
    height: 77vh;
    margin-top: 5.5vh;
    @media (max-width: 768px) {
      width: 70vw;
      height: 65vh;
    }
    @media (max-width: 426px) {
      width: 80vw;
      height: 85vh;
      margin-top: 1.7vh;
    }
`;

export const TelaLogadoDivTitleDiv =  styled.div `
    display: flex;
    align-content: center;
    align-items: center;
    align-self: flex-start;
    width: 90%;
    height: 20%;
    h1 {
      font-family: Sora;
    font-style: normal;
    font-weight: bold;
    font-size: 1.9rem;
    line-height: 2.7rem;
    color: ${props=>props.theme.colors.darkTextForms} ; //var( --dark-text-forms)
    }
`;

export const FatEProj = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 24%;
    @media (max-width: 426px) {
        flex-direction: column;
        width: 100%;
        height: 34%;
    }
`;

export const Faturamento = styled.div `
    display: flex;
    flex-direction: column;
    width: 47.5%;
    height: 100%;
    background: ${props=>props.theme.colors.darkBackgroundForms}  ; //var(--dark-background-forms)
    border-radius: 10px;
    padding-left: 2.5%;
    padding-top: 2.5%;
    @media (max-width: 426px) {
      width: 100%;
        height: 48.5%;
        padding-left: 2.8%;
        padding-top: 1%;
        margin-bottom: 2vh;
        padding-top: 3%;
    }
    @media (max-width: 321px) {
      padding-top: 5.5%;
    }
    h1 {
      font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 0.8rem;
line-height: 1.2rem;
letter-spacing: 0.25em;
text-transform: uppercase;
color: ${props=>props.theme.colors.darkTextForms} ; //var(--dark-text-forms)
      @media (max-width: 426px) {
        font-size: 0.7rem;
        line-height: 1.1rem;
      }
    }
    h2 {
      font-family: Sora;
    font-style: normal;
    font-weight: bold;
    font-size: 2.7rem;
    line-height: 3.6rem;
    letter-spacing: -0.03em;
    margin-top: 3%;
    color: ${props=>props.theme.colors.darkTextForms} ; //var(--dark-text-forms)
      @media (max-width: 426px){
        font-size: 2.6rem;
          line-height: 3.5rem;
        }
    }
`;


export const Galeria = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 52%;
    margin-top: 2.6%;
    @media (max-width: 426px) {
      height: 48%;
        margin-top: 2vh;
    }
    h1 {
      font-family: Sora;
font-style: normal;
font-weight: 600;
font-size: 1.4rem;
line-height: 1.4rem;
color: ${props=>props.theme.colors.darkTextForms} ; //var(--dark-text-forms)
    }
`;

export const GaleriaDivDeBaixo = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 94.5%;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: ${props=>props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
    margin-top: 1%;
    border-radius: 10px;
    @media (max-width: 426px) {
      display: flex;
        flex-direction: column;
        width: 100%;
        height: 84.5%;
        align-items: center;
        align-content: center;
        justify-content: center;
        background: ${props=>props.theme.colors.darkBackgroundForms} ; //var(--dark-background-forms)
        margin-top: 1%;
        border-radius: 10px;
    }
    h1 {
      font-family: Sora;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;
      color: #B2B3BF;
    }
    div {
      display: flex;
flex-direction: row;
align-self: center;
align-content: center;
justify-content: center;
background: #0147FA;
border-radius: 8px;
font-family: Sora;
font-style: normal;
font-weight: bold;
font-size: 0.9rem;
line-height: 2.6rem;
align-items: center;
text-align: center;
color: #FFFFFF;
width: 37%;
height: 20%;
margin-top: 3%;
    }
`;

export const ProfileDiv = styled.div `
    width: 100vw;
    height: 100vh;
    background: ${props=>props.theme.colors.darkBackground} ; //var(--dark-background)
    display: flex;
    flex-direction: column;
`;

export const ProfileStats = styled.div `
display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
    width:33vw;
    height:79vh;
    margin-top: 5.1vh;
    @media (max-width: 768px){
      width: 40vw;
    }
    @media (max-width: 426px){
      width: 65vw;
    }
    @media (max-width: 321px){
      width: 70vw;
    }
`;
export const ProfileStatsImgTitle = styled.div `
display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center; 
    width:100%;
    height:35%;
    img {
      height: 45%;
      width: 45%;
      align-self: center;
    }
    h1 {
      font-family: Sora;
font-style: normal;
font-weight: 600;
font-size: 1.8rem;
line-height: 2.7rem;
display: flex;
align-items: center;
align-self:center;
color: ${props => props.theme.colors.darkTextForms};
    }
    h2{
font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 0.7rem;
line-height: 1.2rem;
align-self:center;
display: flex;
align-items: center;
color: #B2B3BF;
    }
`;

export const ProfileStatsProgressesBar = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
    background: ${props => props.theme.colors.darkBackgroundForms};
    border-radius: 20px;
    width: 100%;
    height:65%;
    h1 {
      font-family: Sora;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.4rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-top:7%;
      margin-left:6%;
      color: ${props => props.theme.colors.darkTextForms};
    }
`;

export const ProfileStatsProgressesBarDiv = styled.div `
display: flex;
flex-direction: column;
align-self: center;
align-content: center;
width:87.5%;
height:80%;
h1 {
  margin-top: 2%;
  margin-left:-0%;
    font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 0.6rem;
line-height: 0.8rem;
display: flex;
align-items: flex-start;
align-self:flex-start;
justify-self:flex-start;
color: ${props => props.theme.colors.darkTextForms};
  }
`;

export const ProfileStatsProgressesBarDivPremium = styled.div `
display: flex;
    flex-direction:column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height:42%;
    border: 2px solid #d9d9d9;
    margin-top: 4%;
box-sizing: border-box;
border-radius: 8px;
    background-color: ${props => props.theme.colors.darkBackgroundForms};
    h1 {
      align-self: center;
      font-family: Sora;
      font-style: normal;
      font-weight: normal;
      font-size: 0.5rem;
      line-height: 0.8rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: #B2B3BF;
    }
    .imagem1 {
      align-self:center;
      width: 30%;
      height:30%;
    }
    .imagem2 {
      align-self:center;
      width: 40%;
      height:100%;
    }
    @media (max-width: 768px) {
      margin-top: 16%;
      .imagem2 {
        width: 60%;
      }
    }
`;

interface Props {
  width:number,
}
export const ContainerStyles = styled.div `
background: #e6e6e6;
border-radius: 6px;
align-self:flex-start;
justify-self:flex-start;
margin-top: 9%;
width: 100%;
height: 6%;
  div {
    height: 100%;
    width: ${(props:Props) => `${props.width}%`};
    background: #0147FA;
    border-radius: 6px;
  }

`;


export const BottonModalDivVerde = styled.div `
    align-items: center;
    align-self: center;
    justify-items: center;
    display: flex;
    flex-direction: row;
    z-index: 10;
    width: 42vw;
    height: 4.5vh;
    background: ${props=>props.theme.colors.bottonModalDark}; //var(--botton-modal-dark)
    box-shadow: 0px 13.6207px 29.2897px rgba(14, 42, 14, 0.196715), 0px 4.27365px 7.95718px rgba(14, 42, 14, 0.33);
    border-radius: 4px;
    margin-top: -8vh;

    @media (max-width: 768px) {
        width: 65vw;
    }
    @media (max-width: 426px) {
        width: 71vw;
        height: 11vh;
    }
    @media (max-width: 376px) {
        width: 75vw;
        height: 11vh;
    }

    img {
        margin-left:2vw;
    } 

    p {
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1.8rem;
    display: flex;
    margin-left: 1.8vw;
    text-align: center;
    color: #FFFFFF;
    align-self: center;
    justify-content: center;
        @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 2rem;
        margin-left: 2vw;
        }
    }   
`;

export const BottonModalDivVermelho = styled(BottonModalDivVerde) `
  background: #E9453A;
  justify-content: center;
`;