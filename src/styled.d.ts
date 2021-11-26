import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
        darkTextForms: string,
        bottonModalDark:string,
        darkBackground:string,
        darkBackgroundForms:string,
    }
    }
}