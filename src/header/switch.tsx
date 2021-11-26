
import ReactSwitch from 'react-switch';

interface Props {
    toggleTheme: () => void,
    title: string
}

export default function Switch(props: Props)  {
    return (
        <ReactSwitch onChange = {props.toggleTheme} checked={props.title === 'theme-dark'} checkedIcon={false} uncheckedIcon={false} 
                        height={20} width={42} handleDiameter={16} offColor='#1D2143' onColor='#FFFFFF' 
                        offHandleColor='#E5E5E5' onHandleColor='#1C1E2C'/>
    );
}