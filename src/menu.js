import './style.css'
import bbqLogo from'./imgs/bbq-logo.jpeg'
import firstMain from './imgs/main1.jpeg'
import secondMain from './imgs/main2.jpeg'
import thirdMain from './imgs/main3.jpeg'
import fourthMain from './imgs/main4.jpeg'
import fifthMain from './imgs/main5.jpeg'
import sixthMain from './imgs/main6.jpeg'


export function menu (){
    
    const content = document.querySelector('#content')

    //append menu header

    const header1 = document.createElement('h1')
    header1.textContent = 'Our Menu'
    content.appendChild(header1)

    //append bbq logo to header

    const logo = document.createElement('img')
    logo.src = bbqLogo;
    logo.classList.add('logo')
    header1.appendChild(logo)

    //append 'mains' header

    const mainHeader = document.createElement('h2')
    mainHeader.textContent = 'Mains'
    content.appendChild(mainHeader)

    //append main 1 img

    const mainContainer1 = document.createElement('div')
    const main1 = document.createElement('img')
    mainContainer1.classList.add('menu-container')
    main1.src = firstMain;
    mainContainer1.appendChild(main1)
    content.appendChild(mainContainer1)

    //append main 1 description & price

    const mainInfo1 = document.createElement('p')
    const mainPrice1 = document.createElement('span')
    mainInfo1.classList.add('info')
    mainInfo1.textContent = `Chicken & Half Rack BBQ Ribs with a side of your choice.`
    mainPrice1.textContent = `$ 23.99`
    content.appendChild(mainInfo1)
    mainInfo1.appendChild(mainPrice1)

    //append main 2 img

    const mainContainer2 = document.createElement('div')
    const main2 = document.createElement('img')
    mainContainer2.classList.add('menu-container')
    main2.src = secondMain
    mainContainer2.appendChild(main2)
    content.appendChild(mainContainer2)

    //append main 2 description & price

    const mainInfo2 = document.createElement('p');
    const mainPrice2 = document.createElement('span')
    mainInfo2.classList.add('info')
    mainInfo2.textContent = 'Half Rack BBQ Back Ribs with a side of your choice.'
    mainPrice2.textContent = `$ 14.99`
    content.appendChild(mainInfo2)
    mainInfo2.appendChild(mainPrice2)
    
    //append main 3 img
    
    const mainContainer3 = document.createElement('div')
    const main3 = document.createElement('img')
    mainContainer3.classList.add('menu-container')
    main3.src = thirdMain;
    mainContainer3.appendChild(main3);
    content.appendChild(mainContainer3)

    //append main 3 description & price

    const mainInfo3 = document.createElement('p');
    const mainPrice3 = document.createElement('span');
    mainInfo3.classList.add('info');
    mainInfo3.textContent = 'Full Rack BBQ Back Ribs with a side of your choice.'
    mainPrice3.textContent = '$ 21.99'
    content.appendChild(mainInfo3)
    mainInfo3.appendChild(mainPrice3)


    //append main 4 img

    const mainContainer4 = document.createElement('div');
    const main4 = document.createElement('img');
    mainContainer4.classList.add('menu-container');
    main4.src = fourthMain;
    mainContainer4.appendChild(main4);
    content.appendChild(mainContainer4);

    //append main 4 description & price

    const mainInfo4 = document.createElement('p');
    const mainPrice4 = document.createElement('span');
    mainInfo4.classList.add('info');
    mainInfo4.textContent = 'NEW! Third Rack BBQ Back Ribs with a side of your choice.';
    mainPrice4.textContent = `$11.99`;
    content.appendChild(mainInfo4);
    mainInfo4.appendChild(mainPrice4);

    //append main 5 img

    const mainContainer5 = document.createElement('div');
    const main5 = document.createElement('img');
    mainContainer5.classList.add('menu-container');
    main5.src = fifthMain;
    mainContainer5.appendChild(main5);
    content.appendChild(mainContainer5);

    //append main 5 description & price

    const mainInfo5 = document.createElement('p');
    const mainPrice5 = document.createElement('span');
    mainInfo5.classList.add('info');
    mainInfo5.textContent = 'Wings & Half Rack Ribs with a side of your choice.';
    mainPrice5.textContent = '$21.99';
    content.appendChild(mainInfo5);
    mainInfo5.appendChild(mainPrice5);

    //append main 6 img

    const mainContainer6 = document.createElement('div');
    const main6 = document.createElement('img');
    mainContainer6.classList.add('menu-container');
    mainContainer6.appendChild(main6);
    main6.src = sixthMain;
    content.appendChild(mainContainer6);

    //append main 6 description & price

    const mainInfo6 = document.createElement('p')
    const mainPrice6 = document.createElement('span');
    mainInfo6.classList.add('info');
    mainInfo6.textContent = 'Wings & Third Rack Ribs with a side of your choice.';
    mainPrice6.textContent = '$18.99';
    content.appendChild(mainInfo6);
    mainInfo6.appendChild(mainPrice6);
}