import contactImg from './images/contact.png';

const contact = () => {
    //target content div
    const content = document.getElementById('content');

    //set any active tab to inactive
    const currentActive = document.getElementsByClassName('active')[0];
    currentActive.className = 'inactive';

    //set contact tab to active
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.className = 'active';

    //create contact content
    //create the contact main image
    const img = new Image();
    img.src = contactImg;
    img.id = 'contact-img';

    //contact information
    const contact = {'Phone':'+1-555-555-5555', 'Email':'CrowsCafeDiner@finalfantasyXV.com'}
    const locations = ['Longwythe Rest Area', 'Coernix Station - Alstor', 'Cauthess Rest Area', 'Taelpar Rest Area', 'Old Lestallum']

    //contact main info
    const infoHead = document.createElement('h2');
    infoHead.id = 'contact-info-head';
    infoHead.textContent = 'We hope to see you soon!';

    let info = document.createElement('div');
    info.id = 'contact-info';

    let phone = document.createElement('div');
    phone.id = 'contact-phone';

    let phoneText = document.createElement('h3');
    phoneText.textContent = 'Call us at:';

    let phoneNum = document.createElement('h3');
    phoneNum.textContent = contact['Phone'];

    phone.appendChild(phoneText);
    phone.appendChild(phoneNum);

    let email = document.createElement('div');
    email.id = 'contact-email';

    let emailText = document.createElement('h3');
    emailText.textContent = 'Email:';

    let emailAdd = document.createElement('h3');
    emailAdd.textContent = contact['Email'];

    email.appendChild(emailText);
    email.appendChild(emailAdd);

    info.appendChild(phone);
    info.appendChild(email);

    //create the slots for the locations
    const locationsHead = document.createElement('h2');
    locationsHead.id = 'contact-locations-head';
    locationsHead.textContent = 'Our Locations:';

    const locationsTable = document.createElement('div');
    locationsTable.id = 'contact-locations';

    for (let i = 0; i < locations.length; i++) {
        let slot = document.createElement('div');
        slot.className = 'contact-slot';
        slot.textContent = locations[i]
        locationsTable.appendChild(slot);
    }

    //wipe anything inside content div
    content.innerHTML = '';

    //add content of contact tab
    content.appendChild(img);
    content.appendChild(infoHead)
    content.appendChild(info);
    content.appendChild(locationsHead);
    content.appendChild(locationsTable);
}

export { 
    contact, 
}