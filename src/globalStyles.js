import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Aguafina+Script&display=swap');
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {  
        font-family: 'Aguafina Script', cursive;
    }
`;

export default GlobalStyle;
