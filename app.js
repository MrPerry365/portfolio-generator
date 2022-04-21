// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
// // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     Github: ${githubName}
//     `;
// };
// console.log(generatePage(profileDataArgs[0], profileDataArgs[1]));



var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        name:'firstName', 
        message:'What is your first name?',
    }
  ])
  .then((answers) => {
      console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
      console.error(error);

  });










































// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
