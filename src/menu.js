import data from './menu.json'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./images/menu', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./images/menu', false, /\.(png|jpe?g|svg)$/));

const menu = () => {
    //target content div
    const content = document.getElementById('content');

    //set any active tab to inactive
    const currentActive = document.getElementsByClassName('active')[0];
    currentActive.className = 'inactive';

    //set menu tab to active
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.className = 'active';

    //create menu content
    const mainMenu = document.createElement('div');
    mainMenu.id = 'menu-main';

    for (let i = 0; i < Object.keys(data).length; i++) {
        let item = document.createElement('div');
        item.className = 'menu-item';
        item.innerHTML = '';

        let picture = new Image();
        picture.src = images[data[i]['img']]
        picture.className = 'menu-pic'

        let info = document.createElement('div');
        info.className = 'menu-info';

        let header = document.createElement('div');
        header.className = 'menu-header';

        let name = document.createElement('h3');
        name.textContent = data[i]['name'];

        let price = document.createElement('h3');
        price.textContent = data[i]['price'];

        let description = document.createElement('p');
        description.textContent = data[i]['description'];

        header.appendChild(name);
        header.appendChild(price);
        info.append(header);
        info.append(description);
        item.appendChild(picture);
        item.appendChild(info);
        mainMenu.appendChild(item);
    }

    //wipe anything inside content div
    content.innerHTML = '';

    //add menu into content
    content.appendChild(mainMenu);
}

export { 
    menu,
}

