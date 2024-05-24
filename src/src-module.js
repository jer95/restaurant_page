import './style.css'
import bbqLogo from './imgs/bbq-logo.jpeg'

export function homepage(){
const content = document.querySelector('#content')

// append main header
const header1 = document.createElement('h1')
header1.textContent = 'JD\'s BBQ'
content.appendChild(header1)

//append bbq logo 
const logo = document.createElement('img')
logo.src = bbqLogo;
header1.appendChild(logo)

//append intro paragraph
const headline = document.createElement('div')
const intro = document.createElement('p')
intro.textContent = `Welcome to JD's BBQ home of the greatest barbecue; from tender ribs to juicy briskets,
come savor the taste of true Texas-style barbecue.`
headline.classList.add('headline') 

headline.appendChild(intro)
content.appendChild(headline)


//append schedule
const info = document.createElement('div')
const header2 = document.createElement('h2')
header2.textContent = `Hours`
info.classList.add('hours')
info.appendChild(header2)
content.appendChild(info)

const hours = document.createElement('ul')
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
for(let a = 0 ; a < days.length; a++){
    const li = document.createElement('li')
    li.textContent = `${days[a]} 9 am - 11 pm`
    hours.appendChild(li)
}
info.appendChild(hours)
}

