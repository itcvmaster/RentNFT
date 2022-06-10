import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --padding: 0 20px;
  --border-radius: 18px;

  --hover: yellow;
  --blue: #073A65;
  --shade-0: #000;
  --shade-1: #303030;
  --shade-2: #606060;
  --shade-3: #808080;
  --shade-4: #A0A0A0;
  --shade-5: #BEBEBE;
  --shade-6: #D8D8D8;
  --shade-7: #F0F0F0;
  --shade-8: #fff;

  --sp-1: 1px;
  --sp-2: 2px;
  --sp-4: 4px;
  --sp-8: 8px;
  --sp-12: 12px;
  --sp-16: 16px;
  --sp-24: 24px;
  --sp-32: 32px;

  body {
    padding: 0;
    margin: 0;
    color: var(--shade-1);
    font-family: inter;
  };

  @font-face {
    font-family: inter;  
    src: url('/fonts/Inter-Regular.ttf');
  }

  @font-face {
    font-family: dance;
    src: url('/fonts/DancingScript-Bold.ttf');
  }
}
`;

export default GlobalStyles;