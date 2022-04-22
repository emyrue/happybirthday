import './style.css';
import { menu, myLogo, mobileBanner, desktopBanner } from './modules/images.js';
import { head } from 'lodash';

// Elements
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const headline = document.getElementById('headline');

// Append Child
mobileNav.appendChild(menu);
logo.appendChild(myLogo);
headline.appendChild(mobileBanner);
headline.appendChild(desktopBanner);