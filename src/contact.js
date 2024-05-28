import './style.css'
import bbqLogo from './imgs/bbq-logo.jpeg'

export function contactUs (){

    const content = document.querySelector('#content');

    //append 'Contact Us' header

    const mainHeader = document.createElement('h1')
    mainHeader.textContent = 'Contact Us';
    content.appendChild(mainHeader);

    //append bbq logo to header

    const logo = document.createElement('img');
    logo.src = bbqLogo;
    logo.classList.add('logo')
    mainHeader.appendChild(logo);

    //append 'Order' header

    const orderHeader = document.createElement('h2');
    orderHeader.classList.add('order-header')
    orderHeader.textContent = 'How To Order'
    content.appendChild(orderHeader)

    //append 'order' instructions

    const order = document.createElement('ol')
    const order1 = document.createElement('li')
    const order2 = document.createElement('li')
    order1.classList.add('order')
    order2.classList.add('order')
    order1.textContent = `Call us between these hours at 416-955-3181 with your order and allow up to 30 minutes before pickup.
    You will receive an order # please bring that number with you.`
    order2.textContent = `Email us @ JDBBQ@gmail.com between these hours with your order and allow up to 30 minutes before pickup.
    You will receive an order # in your email please bring that number with you.`
    order.appendChild(order1)
    order.appendChild(order2)
    content.appendChild(order)

    // append 'customer service' header

    const serviceHeader = document.createElement('h2')
    const serviceMessage = document.createElement('p')
    serviceHeader.classList.add('order-header')
    serviceMessage.classList.add('info')
    serviceHeader.textContent = 'Customer Service';
    serviceMessage.textContent = `Please contact me directly with any complaints or comments either @ my email
    JDBBQ@gmail.com or 416-955-3181, Thank you.`
    content.appendChild(serviceHeader)
    content.appendChild(serviceMessage)

}