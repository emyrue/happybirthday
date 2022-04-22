import './style.css';
import { menu, myLogo, mobileBanner } from './modules/images.js';

// Elements
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');
const headline = document.getElementById('headline');

// Append Child
mobileNav.appendChild(menu);
logo.appendChild(myLogo);
headline.appendChild(mobileBanner);