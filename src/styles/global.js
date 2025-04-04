import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

:root {
font-size: 62.5%rem;

}

body, buttton, input, text-area {
   font-family: "Roboto Slab", serif;
   font-size: 1.6rem;
   outline: none;

}

body {
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   color: ${({theme}) => theme.COLORS.WHITE};
}

a { 
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: 0.2;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`;
