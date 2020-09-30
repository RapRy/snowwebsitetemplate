import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    img{max-width:100%;}

    a{text-decoration:none;}

    ul{list-style:none;}
`;

export default GlobalStyle;