const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

// const generatePage = () => 'Name: Camil, Github: camilhub';

const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
    
}
console.log(generatePage(name, github));


















// const printProfileData = profileDataArr => {
//     //This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('==============');


//     //Is the same as this...
//     profileDataArr.forEach(profileItem => 
//         console.log(profileItem));

// }; hi;`

// printProfileData(profileDataArgs)