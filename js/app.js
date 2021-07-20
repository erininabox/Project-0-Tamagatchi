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

const actionsMenu = document.getElementById('actions-menu');
const actionsList = document.getElementById('actions-list');
const actionsFeed = document.getElementById('actions-feed');
const actionsSleep = document.getElementById('actions-sleep');
const actionsPlay = document.getElementById('actions-play');

const statusArea = document.getElementById('status-area');
const statusBars = document.getElementById('status-bars');
const statusHungry = document.getElementById('status-hungry');
const statusSleepy = document.getElementById('status-sleepy');
const statusBored = document.getElementById('status-bored');

const backSubmit = document.getElementById('back-submit');
const btnBack = document.getElementById('btn-back');
const btnSubmit = document.getElementById('btn-submit');

const footerLinks = document.getElementById('footer-links');
const linkGithubRepo = document.getElementById('link-github-repo');
const linkGithubDemo = document.getElementById('link-github-demo');

//////////////////////////////////////////////////////////
// PET CLASS - first

// how to organize generic pet class w/ pet types???

// generic pet class:
// name
// age
// hunger
// sleepiness
// boredom
// boolean alive key-value, when alive=false trigger pet death


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
// Pet Sleep
// Pet Play


//////////////////////////////////////////////////////////
// PET STATES

// when state=10, trigger pet death
// intervals for each state


//////////////////////////////////////////////////////////
// PET AGING

// similar to pet states-- set an interval for aging that is passive/constant.
// when age=X (WHAT SHOULD X BE?), trigger different death state

//////////////////////////////////////////////////////////
// PET DEATH FUNCTIONALITY

// Death State 1: Pet dies of neglect, bad pet parent
// Death State 2: Pet dies happy of old age
    // Changes display by hiding status bars, etc.
    // Message, differs depending on which death state

//////////////////////////////////////////////////////////
// EVENT LISTENERS - first
// add listeners for clicks on buttons

// event listener for submit name
// event listener for 
