import { homepage } from "./homepage.js";
import {menu} from './menu.js'
import { contactUs } from "./contact.js";


//start page on homepage
homepage()

//define dom elements
const body = document.querySelector('body')
const homepageBtn = document.querySelector('#homepage')
const menuBtn = document.querySelector('#menu')
const contactBtn = document.querySelector('#contact')

//create button that displays homepage
homepageBtn.addEventListener('click',() => {
    const content = document.querySelector('#content')
    content.remove()
    const newContent = document.createElement('div')
    newContent.setAttribute('id','content')
    body.appendChild(newContent)
    homepage()
})


//create button that displays menu page
menuBtn.addEventListener('click',() => {
    const content = document.querySelector('#content')
    content.remove()
    const newContent = document.createElement('div')
    newContent.setAttribute('id','content')
    body.appendChild(newContent)
    menu()
})

//create button that displays contact page
contactBtn.addEventListener('click', () => {
    const content = document.querySelector('#content')
    content.remove()
    const newContent = document.createElement('div')
    newContent.setAttribute('id','content')
    body.appendChild(newContent)
    contactUs()
})