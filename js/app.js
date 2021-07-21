//////////////////////////////////////////////////////////
// Global Constants by ID Tag
const petPicArea = document.getElementById('pet-pic-area');
const petPhoto = document.getElementById('pet-photo');
const petName = document.getElementById('pet-name');

const namePrompt = document.getElementById('name-prompt');
const askForName = document.getElementById('ask-for-name');
const nameForm = document.getElementById('name-form');
const nameField = document.getElementById('name-field');
const btnNameSubmit = document.getElementById('btn-name-submit');

const notifyArea = document.getElementById('notify-area');
const notifyMessage = document.getElementById('notify-message');

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
const statusHungry = document.getElementById('status-hungry');
const statusSleepy = document.getElementById('status-sleepy');
const statusBored = document.getElementById('status-bored');

const backSubmit = document.getElementById('back-submit');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');

const footerLinks = document.getElementById('footer-links');
const linkGithubRepo = document.getElementById('link-github-repo');
const linkGithubDemo = document.getElementById('link-github-demo');

let myPet = null;
//////////////////////////////////////////////////////////
// PET CLASS - first

class Pet {
    constructor(petName) {
        this.petName = petName;
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
        }, 60000)
    }
    startHunger() {
        this.intHunger = setInterval(()=> {
            this.hunger++;
            statusAge.textContent = 'Hunger: ' + this.hunger;
        }, 60000)
    }
    startSleepy() {
        this.intSleepy = setInterval(()=> {
            this.sleepy++;
            statusAge.textContent = 'Sleepy: ' + this.sleepy;
        }, 60000)
    }
    startBored() {
        this.intBored = setInterval(()=> {
            this.bored++;
            statusAge.textContent = 'Boredom: ' + this.bored;
        }, 60000)
    }
    updateAlive() {
        // state is changed, need to add death state triggers
        if (this.age==20) {
            this.alive = false;
            deathOld();
        } else if (this.hunger==10) {
            this.alive = false;
            deathNeglect();
        } else if (this.sleepy==10) {
            this.alive = false;
            deathNeglect();
        } else if (this.bored==10) {
            this.alive = false;
            deathNeglect();
        };
    };

}

function startPet() {
    console.log('start pet');
    namePrompt.style.display = 'none';
    myPet = new Pet(nameField.textContent);
    myPet.startAge();
    myPet.startHunger();
    myPet.startSleepy();
    myPet.startBored(); 
};

//////////////////////////////////////////////////////////
// CHOOSE PET
// maybe leave until later???

// would set species, image

//////////////////////////////////////////////////////////
// NAME PET - first

// how to handle submit name, update pet object w/ name value


//////////////////////////////////////////////////////////
// PET ACTIONS

// Pet Feed
function resetFeed() {
    myPet.hunger = 0;
};
// Pet Sleep
function resetSleep() {
    myPet.sleepy = 0;
};
// Pet Play
function resetBored() {
    myPet.bored = 0;
};

//////////////////////////////////////////////////////////
// PET STATES

// when state=10, trigger pet death
// intervals for each state

// SEE CLASS

//////////////////////////////////////////////////////////
// PET AGING

// SEE CLASS

//////////////////////////////////////////////////////////
// PET DEATH FUNCTIONALITY

// Death State 1: Old Age
function deathOld() {
    actionsMenu.style.display= none;
    statusArea.style.display=none;
    notifyArea.style.display=block;
    notifyMessage.textContent = 'Your beloved pet has died of old age and is at peace. You were a great pet parent.';
    // hide status bars
    // change pet photo
    // display message
    // display 'start over' button
};

// Death State 2: Neglect
function deathNeglect() {
    actionsMenu.style.display= none;
    statusArea.style.display=none;
    notifyArea.style.display=block;
    notifyMessage.textContent='Your pet has died and gone to pet heaven where it always has enough food, someone to play with, and a comfy place to sleep.'
};

    // Changes display by hiding status bars, etc.
    // Message, differs depending on which death state

//////////////////////////////////////////////////////////
// EVENT LISTENERS - first
// add listeners for clicks on buttons

// event listener for submit name
// event listener for 

// EL for triggering aging
btnNameSubmit.addEventListener('click', startPet);
btnFeed.addEventListener('click', resetFeed);
btnPlay.addEventListener('click', resetBored);
btnSleep.addEventListener('click', resetSleep);