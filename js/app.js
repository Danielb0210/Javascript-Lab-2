// Console resume for Javascript Lab 2
//Begin Setting variables and arrays for resume

let name = 'Daniel Bailey';
let fullName = name.toUpperCase();

let career = 'Full Stack Engineer';
let description = 'I am a full stack engineer located in Birmingham, AL. I am a skilled developer with experience in front end development as well as backend support. I am looking for a software development position at a leading financial tech firm and I am open to relocation if necessary.'

let interests = ['Gaming','Traveling','Golf','Investing','Coding'];
let positions = [
    {
        companyName: 'Covalence - Coding Bootcamp',
        jobTitle: 'Software Development Student',
        description: 'Learned and applied various programming languages to establish myself as a full stack software developer.'
    },
    {
        companyName: 'Regions Bank',
        jobTitle: 'Assistent Vice President - Risky Analyst',
        description: 'Use SQL/Excel to build numerous data validation methods to maintain overall consistency of reporting to Fed.'
    },
    {
        companyName: 'Strategic Financial Partners',
        jobTitle: 'Financial Advisor / Financial Services Representative',
        description: 'Network to build existing client base and meet with clients to assist them in structuring wholistic financial plans for their families.'
    }
];

let skills = [
    {
        skillName: 'HTML/CSS',
        isCool: 'No'
    },
    {
        skillName: 'Javascript',
        isCool: 'Yes'
    },
    {
        skillName: 'BootStrap Framework',
        isCool: 'Yes'
    },
    {
        skillName: 'Adobe Creative Suite',
        isCool: 'Yes'
    },
    {
        skillName: 'JQuery',
        isCool: 'No'
    },
    {
        skillName: 'JSON',
        isCool: 'No'
    },
    {
        skillName: 'SQL',
        isCool: 'Yes'
    },
    {
        skillName: 'Command Line',
        isCool: 'No'
    },
    {
        skillName: 'SASS/SCSS',
        isCool: 'Yes'
    }
];

//Create function to call position array
function displayPositions() {
    for (i = 0; i < positions.length; i++) {
        console.log('Company Name: ' + positions[i].companyName);
        console.log('Job Title: ' + positions[i].jobTitle);
        console.log('Description: ' + positions[i].description);
        console.log('\n');
    }
}

//Create function to call skills array
function displaySkills() {
    for (i = 0; i < skills.length; i++) {
        if(skills[i].isCool == 'Yes') {
            console.log('* BAM: ' + skills[i].skillName);
        }else {
            console.log('* ' + skills[i].skillName);
        }
    }
}

//Create function to display interests array
function displayInterests() {
    for (i = 0; i < interests.length; i++) {
        console.log('* ' + interests[i]);
    }
}


//Build Resume

//Name
console.log('Name: ' + fullName);
//Career
console.log('Career: ' + career);
//Description
console.log('Description: ' + description);
console.log('\n');
//Interests
console.log('My Interests:');
displayInterests();
console.log('\n');
//Positions
console.log('My Experience:');



displayPositions();
displaySkills();