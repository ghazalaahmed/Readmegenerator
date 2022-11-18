// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("What is the title of your project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub Username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your Github Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "what",
    message: "What is your project? (Required)",
    validate: (whatInput) => {
      if (whatInput) {
        return true;
      } else {
        console.log("What is your project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "why",
    message: "Why did you create this project? (Required)",
    validate: (whyInput) => {
      if (whyInput) {
        return true;
      } else {
        console.log("Please enter why you created this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How will someone use this? (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("How will someone use this?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Issues",
    message: "How do you report issues? (Required)",
    validate: (issuesInput) => {
      if (issuesInput) {
        return true;
      } else {
        console.log("How do you report issues?");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install it? (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter your installation instructions!");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["apache", "mit", "no license"],
  },

  {
    type: "input",
    name: "contribute",
    message: "Please provide guidelines for contributing. (Required)",
    when: ({ confirmContributers }) => {
      if (confirmContributers) {
        return true;
      } else {
        return false;
      }
    },
    validate: (contributerInput) => {
      if (contributerInput) {
        return true;
      } else {
        console.log("Please enter contributer guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("How do you test the app?");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeToFile("./dist/generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const readme = generateMarkdown(answers);
    console.log(readme);
  });
}

// Function call to initialize app
init();
//   .then((readmeData) => {
//     console.log(readmeData);
//     return generateMarkdown(readmeData);
//   })
//   .then((pageMD) => {
//     return writeToFile(pageMD);
//   })
//   .then((writeToFileResponse) => {
//     console.log(writeToFileResponse.message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
