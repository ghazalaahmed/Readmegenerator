//function to generate markdown for README
const generateMarkdown = (data) {
  return `# ${data.title}

  ## Licensing

  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  ${data.licensing}
  
  ## Contributing 
  ${data.contributors}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Please don't hesitate to contact me at ${data.email}. You can view more of my projects at https://github.com/${data.github}
  `;
};

module.exports = generateMarkdown;
