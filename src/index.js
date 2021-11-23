import './style.css';
import './modern-normalize.css';
import {initialize} from './init';
import {home} from './home'
import {menu} from './menu'
import {contact} from './contact'

//main function that loads the website and initializes all the needed DOM elements
//initialize website and set starting page to home
initialize();
home();

//cache DOM elements
const btnHome = document.querySelector('#home-btn');
const btnMenu = document.querySelector('#menu-btn')
const btnContact = document.querySelector('#contact-btn');

//create event listeners for the nav menu
btnHome.addEventListener('click', home);
btnMenu.addEventListener('click', menu);
btnContact.addEventListener('click', contact);