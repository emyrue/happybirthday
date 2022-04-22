import hamburger from '../icons/hamburger.svg';
import logo from '../icons/logo.png';

const menu = new Image();
menu.src = hamburger;
const myLogo = new Image();
myLogo.src = logo;
myLogo.className = 'logo-size';

export { menu, myLogo };