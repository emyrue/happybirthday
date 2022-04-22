import './style.css';
import { menu, myLogo } from './modules/images.js';

// Elements
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');

// Append Child
mobileNav.appendChild(menu);
logo.appendChild(myLogo);