//Init module to establish general page structure sans content
const initialize = () => {
    //target the body
    const body = document.body;

    //create the header
    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = "Crow's Nest Diner"
    body.appendChild(header)

    //create the nav
    const nav = document.createElement('div');
    nav.id = 'nav';
    
    const home = document.createElement('div');
    home.id = 'home-btn'
    home.textContent = 'Home';
    home.className = 'inactive'

    const menu = document.createElement('div');
    menu.id = 'menu-btn'
    menu.textContent = 'Menu';
    menu.className = 'inactive'

    const contact = document.createElement('div');
    contact.id = 'contact-btn'
    contact.textContent = 'Contact';
    contact.className = 'inactive'

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    body.appendChild(nav);

    //create the content
    const content = document.createElement('div')
    content.id = 'content';
    body.appendChild(content);

    //create the footer
    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.textContent = "Copyright 2021 Cam Nguyen"
    body.appendChild(footer);
}

export {
    initialize,
}