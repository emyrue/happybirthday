import hamburger from '../icons/hamburger.svg';
import logo from '../icons/logo.png';
import mobile from '../shapes1/mobilebanner.png';
import desktop from '../shapes1/desktopbanner.svg';

const menu = new Image();
const myLogo = new Image();
const mobileBanner = new Image();
const desktopBanner = new Image();

menu.src = hamburger;
myLogo.src = logo;
mobileBanner.src = mobile;
desktopBanner.src = desktop;

myLogo.className = 'logo-size';
mobileBanner.className = 'mobile-banner';
desktopBanner.className = 'desktop-banner';

export { menu, myLogo, mobileBanner, desktopBanner };