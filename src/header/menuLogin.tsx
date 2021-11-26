import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "./switch";
import * as S from "../styles";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  handleSubmit: (e) => void;
  darkLogin: boolean;
  toggleTheme: () => void;
}

export default function MenuLogin(props: Props) {
  const { title } = useContext(ThemeContext);
  return (
    <S.StyledModal
      isOpen={props.isOpen}
      onRequestClose={props.toggleModal}
      onBackgroundClick={props.toggleModal}
      onEscapeKeydown={props.toggleModal}
      closeTimeoutMS={0}
    >
      <S.DarkSwitchDiv>
        <S.Switch>
          <Switch title={title} toggleTheme={props.toggleTheme} />
          <span className="switch-text">Dark Mode</span>
        </S.Switch>
      </S.DarkSwitchDiv>
      <S.DarkSwitchDivDivButton type="submit" onClick={props.handleSubmit}>
        Fazer Login
      </S.DarkSwitchDivDivButton>
    </S.StyledModal>
  );
}
