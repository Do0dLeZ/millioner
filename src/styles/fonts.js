import { createGlobalStyle } from "styled-components";

import InterTtf from "../assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterTtf});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url(${InterTtf});
        font-weight: 600;
        font-style: normal;
    }
`;
