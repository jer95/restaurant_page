import './style.css'
import bbqLogo from'./imgs/bbq-logo.jpeg'
import firstMain from './imgs/main1.jpeg'
import secondMain from './imgs/main2.jpeg'
import thirdMain from './imgs/main3.jpeg'
import fourthMain from './imgs/main4.jpeg'
import fifthMain from './imgs/main5.jpeg'
import sixthMain from './imgs/main6.jpeg'
import firstSide from './imgs/side1.jpeg'
import secondSide from './imgs/side2.jpeg'
import thirdSide from './imgs/side3.jpeg'
import fourthSide from './imgs/side4.jpeg'
import fifthSide from './imgs/side5.jpeg'
import firstBeverage from './imgs/bev1.png'
import secondBeverage from './imgs/bev2.png'
import thirdBeverage from './imgs/bev3.png'


export function menu (){

    const content = document.querySelector('#content')

    //append menu header

    const header1 = document.createElement('h1')
    header1.textContent = 'MENU'
    content.appendChild(header1)

    //append bbq logo to header

    const logo = document.createElement('img')
    logo.src = bbqLogo;
    logo.classList.add('logo')
    header1.appendChild(logo)

    //MAINS

    //append 'mains' header

    const mainHeader = document.createElement('h2')
    mainHeader.textContent = 'MAINS'
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

    const mainInfo6 = document.createElement('p');
    const mainPrice6 = document.createElement('span');
    mainInfo6.classList.add('info');
    mainInfo6.textContent = 'Wings & Third Rack Ribs with a side of your choice.';
    mainPrice6.textContent = '$18.99';
    content.appendChild(mainInfo6);
    mainInfo6.appendChild(mainPrice6);

    
    
    
    // SIDES



    //append 'sides' header

    const sidesHeader = document.createElement('h2');
    sidesHeader.textContent = 'SIDES';
    content.appendChild(sidesHeader);

    //append side 1 img

    const sideContainer1 = document.createElement('div');
    const side1 = document.createElement('img');
    sideContainer1.classList.add('menu-container');
    side1.src = firstSide;
    sideContainer1.appendChild(side1);
    content.appendChild(sideContainer1);

    //append side 1 description & price

    const sideInfo1 = document.createElement('p');
    const sidePrice1 = document.createElement('span');
    sideInfo1.classList.add('info')
    sideInfo1.textContent = 'Fresh Cut Fries';
    sidePrice1.textContent = '$3.99';
    content.appendChild(sideInfo1);
    sideInfo1.appendChild(sidePrice1);

    //append side 2 img

    const sideContainer2 = document.createElement('div');
    const side2 = document.createElement('img');
    sideContainer2.classList.add('menu-container');
    side2.src = secondSide;
    sideContainer2.appendChild(side2);
    content.appendChild(sideContainer2);

    //append side 2 description & price

    const sideInfo2 = document.createElement('p');
    const sidePrice2 = document.createElement('span');
    sideInfo2.classList.add('info');
    sideInfo2.textContent = 'Sweet Potato Fries';
    sidePrice2.textContent = '$5.99';
    content.appendChild(sideInfo2);
    sideInfo2.appendChild(sidePrice2)

    //append side 3 img

    const sideContainer3 = document.createElement('div');
    const side3 = document.createElement('img');
    sideContainer3.classList.add('menu-container');
    side3.src = thirdSide;
    sideContainer3.appendChild(side3)
    content.appendChild(sideContainer3);

    //append side 3 description & price

    const sideInfo3 = document.createElement('p');
    const sidePrice3 = document.createElement('span');
    sideInfo3.classList.add('info')
    sideInfo3.textContent = 'Creamy Coleslaw';
    sidePrice3.textContent = '$3.49';
    content.appendChild(sideInfo3);
    sideInfo3.appendChild(sidePrice3)

    //append side 4 img

    const sideContainer4 = document.createElement('div');
    const side4 = document.createElement('img');
    sideContainer4.classList.add('menu-container');
    side4.src = fourthSide;
    sideContainer4.appendChild(side4);
    content.appendChild(sideContainer4);

    //append side 4 description & price

    const sideInfo4 = document.createElement('p');
    const sidePrice4 = document.createElement('span');
    sideInfo4.classList.add('info');
    sideInfo4.textContent = 'Caesar Salad';
    sidePrice4.textContent = '$4.99';
    content.appendChild(sideInfo4);
    sideInfo4.appendChild(sidePrice4);

    //append side 5 img

    const sideContainer5 = document.createElement('div');
    const side5 = document.createElement('img');
    sideContainer5.classList.add('menu-container');
    side5.src = fifthSide;
    sideContainer5.appendChild(side5);
    content.appendChild(sideContainer5);

    //append side 5 description & price

    const sideInfo5 = document.createElement('p');
    const sidePrice5 = document.createElement('span');
    sideInfo5.classList.add('info');
    sideInfo5.textContent = 'Loaded Baked Potato';
    sidePrice5.textContent = '$3.99'
    content.appendChild(sideInfo5);
    sideInfo5.appendChild(sidePrice5);

   
   
    // BEVERAGES

    //append 'Beverages' header

    const bevHeader = document.createElement('h2');
    bevHeader.textContent = 'BEVERAGES'
    content.appendChild(bevHeader)



    //append bev 1 img

    const bevContainer1 = document.createElement('div');
    const bev1 = document.createElement('img');
    bevContainer1.classList.add('menu-container');
    bev1.src = firstBeverage;
    bevContainer1.appendChild(bev1);
    content.appendChild(bevContainer1);

    //append bev 1 description & price

    const bevInfo1 = document.createElement('p');
    const bevPrice1 = document.createElement('span');
    bevInfo1.classList.add('info');
    bevInfo1.textContent = 'Canned Pop';
    bevPrice1.textContent = '$2.99';
    content.appendChild(bevInfo1);
    bevInfo1.appendChild(bevPrice1);

    //append bev 2 img

    const bevContainer2 = document.createElement('div');
    const bev2 = document.createElement('img');
    bevContainer2.classList.add('menu-container');
    bev2.src = secondBeverage;
    bevContainer2.appendChild(bev2);
    content.appendChild(bevContainer2);

    //append bev 2 description & price

    const bevInfo2 = document.createElement('p');
    const bevPrice2 = document.createElement('span');
    bevInfo2.classList.add('info');
    bevInfo2.textContent = 'Canned Beer'
    bevPrice2.textContent = '$3.99';
    content.appendChild(bevInfo2);
    bevInfo2.appendChild(bevPrice2);

    //append bev 3 img

    const bevContainer3 = document.createElement('div');
    const bev3 = document.createElement('img');
    bevContainer3.classList.add('menu-container');
    bev3.src = thirdBeverage;
    bevContainer3.appendChild(bev3);
    content.appendChild(bevContainer3);

    //append bev 3 description & price 

    const bevInfo3 = document.createElement('p');
    const bevPrice3 = document.createElement('span');
    bevInfo3.classList.add('info');
    bevInfo3.textContent = 'Bottled Beer'
    bevPrice3.textContent = '$5.99'
    content.appendChild(bevInfo3);
    bevInfo3.appendChild(bevPrice3);
}