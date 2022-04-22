import hamburger from '../icons/hamburger.svg';
import logo from '../icons/logo.png';
import mobile from '../shapes1/mobilebanner.png';

const menu = new Image();
const myLogo = new Image();
const mobileBanner = new Image();

menu.src = hamburger;
myLogo.src = logo;
mobileBanner.src = mobile;

myLogo.className = 'logo-size';
mobileBanner.className = 'mobile-banner';

export { menu, myLogo, mobileBanner };