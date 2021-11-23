import KennyImg from './images/KennyCrow.png';

const home = () => {
    //target content div
    const content = document.getElementById('content');

    //set any active tab to inactive
    const currentActive = document.getElementsByClassName('active');
    if (currentActive.length > 0) {
        currentActive[0].className = 'inactive';
    }

    //set home tab to active
    const homeBtn = document.getElementById('home-btn');
    homeBtn.className = 'active';

    //create home content
    //create the home main image
    const img = new Image();
    img.src = KennyImg;
    img.id = 'home-img';

    //create the home main blurb
    const info = document.createElement('p');
    info.id = 'home-text';
    info.textContent = "CAW, kids, it's Kenny Crow! Come on down to the Crow's Nest for a mouthful of happiness! Fly down to the original Nest in Old Lestallum for a real treat! Nothin' tastes better than what we make together at the Crow's Nest! - Kenny Crow";

    //create the time slots for the hours
    const hoursHead = document.createElement('h2');
    hoursHead.id = 'home-hours-head';
    hoursHead.textContent = 'HOURS OPEN:'

    const hours = document.createElement('div');
    hours.id = 'home-hours';
    const weekdays = {'Sunday':'9:00 AM - 10:00 PM', 
                    'Monday':'CLOSED', 
                    'Tuesday':'8:00 AM - 9:00 PM', 
                    'Wednesday':'8:00 AM - 9:00 PM', 
                    'Thursday':'8:00 AM - 9:00 PM', 
                    'Friday':'8:00 AM - 9:00 PM', 
                    'Saturday':'9:00 AM - 10:00 PM'};

    for (let i = 0; i < Object.keys(weekdays).length; i++) {
        let timeslot = document.createElement('div');
        timeslot.className = 'home-timeslot';
        timeslot.innerHTML = '';

        let day = document.createElement('div');
        day.textContent = Object.keys(weekdays)[i];

        let time = document.createElement('div');
        time.textContent = Object.values(weekdays)[i];

        timeslot.appendChild(day);
        timeslot.appendChild(time);
        hours.appendChild(timeslot);
    }

    //wipe anything inside content div
    content.innerHTML = '';

    //add content of home tab
    content.appendChild(img);
    content.appendChild(info);
    content.appendChild(hoursHead);
    content.appendChild(hours);
}

export { 
    home, 
}