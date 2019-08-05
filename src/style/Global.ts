import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { dark } from './tokens/color';
import { fontSans } from './tokens/typography';

WebFont.load({
	google: {
		families: ['Rubik:300,400,500', 'Roboto+Slab:300,400']
	}
});

const Global = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  html {
  scroll-behavior: smooth;
  font-family: ${fontSans};
  -moz-osx-font-smoothing: grayscale;
  color: ${dark}
  }
  body{
    margin:0;
  }
  /* // TODO: dark theme */
  /* @media (prefers-color-scheme: dark) {
    background-color:'';
    color: '';
  } */
`;
export default Global;
