// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const path=require("path")
const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"whats the title of your application"
    }, 
    {
        type:"input",
        name:"discription",
        message:"Enter a discription of your application"
    },
    {
        type:"input",
        name:"installation",
        message:"What do you need to install for the application"
    },
    {
        type:"input",
        name:"usage",
        message:"What is the intented usage"
    },
    {
        type:"input",
        name:"contributing",
        message:"Is there any contributors on the application"
    },
    {
        type:"input",
         name:"tests",
         message:"Were there any tests"
    },
    {
        type:"input",
        name:"github",
        message:"Enter your github username"
    },
    {
         type:"input",
        name:"email",
        message:"Enter email"
    },
    {
        type:"list",
        name:"license",
        message:"What license do you use",
        choices:["MIT","BSD 3","APACHE 2.0","None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("myReadMe.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
