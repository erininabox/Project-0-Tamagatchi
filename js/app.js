//////////////////////////////////////////////////////////
// Global Constants by ID Tag
const petPicArea = document.getElementById('pet-pic-area');
let petPhoto = document.getElementById('pet-photo');
let petNameDisplay = document.getElementById('pet-name-display');
let petAgeDisplay = document.getElementById('pet-age-display');

const namePrompt = document.getElementById('name-prompt');
const askForName = document.getElementById('ask-for-name');
const nameForm = document.getElementById('name-form');
const nameField = document.getElementById('name-field');
const btnNameSubmit = document.getElementById('btn-name-submit');

const notifyArea = document.getElementById('notify-area');
const notifyMessage = document.getElementById('notify-message');
const deathMessage = document.getElementById('death-message');

const actionsMenu = document.getElementById('actions-menu');
const actionsList = document.getElementById('actions-list');
const actionsFeed = document.getElementById('actions-feed');
const actionsSleep = document.getElementById('actions-sleep');
const actionsPlay = document.getElementById('actions-play');
const btnFeed = document.getElementById('btn-feed');
const btnSleep = document.getElementById('btn-sleep');
const btnPlay = document.getElementById('btn-play');

const statusArea = document.getElementById('status-area');
const statusBars = document.getElementById('status-bars');
const statusAge = document.getElementById('status-age');
const statusHungry = document.getElementById('bar-hungry');
const statusSleepy = document.getElementById('bar-sleepy');
const statusBored = document.getElementById('bar-boredom');

const backSubmit = document.getElementById('back-submit');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');

const footerLinks = document.getElementById('footer-links');
const linkGithubRepo = document.getElementById('link-github-repo');
const linkGithubDemo = document.getElementById('link-github-demo');

let myPet = null;
let petName = null;
//////////////////////////////////////////////////////////
// PET CLASS - first

class Pet {
    constructor(nameText) {
        this.petName = nameText;
        this.age=0;
        this.hunger=0;
        this.sleepy=0;
        this.bored=0;
        this.alive=true;
        this.intAge = null;
        this.intHunger = null;
        this.intSleepy = null;
        this.intBored = null;
    }
    startAge() {
        this.intAge = setInterval(()=> {
            this.age++;
            statusAge.textContent = 'Age: ' + this.age;
            this.updateAlive();
            this.updateNotify();
        }, 60000)
    }
    startHunger() {
        this.intHunger = setInterval(()=> {
            this.hunger++;
            statusHungry.textContent = 'Hunger: ' + this.hunger;
            this.updateAlive();
            this.updateNotify();
        }, 5000);
    }
    startSleepy() {
        this.intSleepy = setInterval(()=> {
            this.sleepy++;
            statusSleepy.textContent = 'Sleepy: ' + this.sleepy;
            this.updateAlive();
            this.updateNotify();
        }, 1500)
    }
    startBored() {
        this.intBored = setInterval(()=> {
            this.bored++;
            statusBored.textContent = 'Boredom: ' + this.bored;
            this.updateAlive();
            this.updateNotify();
        }, 3000)
    }
    updateAlive() {
        // state is changed, need to add death state triggers
        if (myPet.age>=20) {
            myPet.alive = false;
            deathOld();
        } else if (myPet.hunger>=10) {
            myPet.alive = false;
            deathNeglect();
        } else if (myPet.sleepy>=10) {
            myPet.alive = false;
            deathNeglect();
        } else if (myPet.bored>=10) {
            myPet.alive = false;
            deathNeglect();
        };
    };
    updateNotify() {
        if (myPet.hunger>=6) {
            petPhoto.src='./img/hungry.jpg';
            notifyMessage.innerText = myPet.petName + ' is hungry!'
        } else if (myPet.sleepy>=6) {
            petPhoto.src='./gh-pages/img/sleepy.jpg';
            notifyMessage.innerText = myPet.petName + ' is sleepy!'
        } else if (myPet.bored>=6) {
            petPhoto.src='./gh-pages/img/bored.jpg';
            notifyMessage.innerText = myPet.petName + ' is bored!'
        } else {
            petPhoto.src='./gh-pages/img/happy.jpg';
            notifyMessage.innerText = '';
        };
    };

}

actionsMenu.style.display = 'none';
statusArea.style.display = 'none';

function startPet() {
    console.log('start pet');
    nameText = getNameText();
    myPet = new Pet(nameText);
    petNameDisplay.textContent = nameText;
    petAgeDisplay.textContent = 'Age: ' + myPet.age;
    myPet.startAge();
    myPet.startHunger();
    myPet.startSleepy();
    myPet.startBored(); 
    namePrompt.style.display = 'none';
    actionsMenu.style.display = 'inherit';
    statusArea.style.display = 'inherit';
};

//////////////////////////////////////////////////////////
// NAME PET - first

// how to handle submit name, update pet object w/ name value
function getNameText() {
    let nameText = document.getElementById("name-field").value;
    return nameText;
};

//////////////////////////////////////////////////////////
// PET ACTIONS

// reset function
// If all levels are less than 6, reset to happy
// if another level is >6 switch to that image and message
// any button click should send it through the loop

// 

// Pet Feed
function resetFeed() {
    myPet.hunger = 0; 
    notifyMessage.innerText = '';
    statusHungry.innerText = 'Hunger: 0';
    updateNotify();
};
// Pet Sleep
function resetSleep() {
    myPet.sleepy = 0;
    notifyMessage.innerText = '';
    statusSleepy.innerText = 'Sleepiness: 0';
    updateNotify();
};
// Pet Play
function resetBored() {
    myPet.bored = 0;
    notifyMessage.innerText = '';
    statusBored.innerText = 'Boredom: 0';
    updateNotify();
};

//////////////////////////////////////////////////////////
// PET DEATH FUNCTIONALITY

// Death State 1: Old Age
function deathOld() {
    if (myPet.alive==false) {
        myPet.intAge = clearInterval();
        myPet.intHunger = clearInterval();
        myPet.intSleepy = clearInterval();
        myPet.intBored = clearInterval();
        petPicArea.style.display='none';
        notifyMessage.style.display='none';
        actionsMenu.style.display='none';
        statusArea.style.display='none';
        deathMessage.textContent = 'Oh no! Your pet has retired!';
    }
};

// Death State 2: Neglect
function deathNeglect() {
    if (myPet.alive==false) {
        myPet.intAge = clearInterval();
        myPet.intHunger = clearInterval();
        myPet.intSleepy = clearInterval();
        myPet.intBored = clearInterval();
        petPicArea.style.display='none';
        notifyMessage.style.display='none';
        actionsMenu.style.display='none';
        statusArea.style.display='none';
        deathMessage.textContent='Oh no! Your pet ran away!';
    }
    };

    // Changes display by hiding status bars, etc.
    // Message, differs depending on which death state

//////////////////////////////////////////////////////////
// EVENT LISTENERS

btnNameSubmit.addEventListener('click', startPet);
btnFeed.addEventListener('click', resetFeed);
btnPlay.addEventListener('click', resetBored);
btnSleep.addEventListener('click', resetSleep);
