const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };  
// const findTheOldest = function(people) {
//     let maxAge = 0;
//     let oldest = "";

//     people.forEach(person => {
//         const currentYear = new Date().getFullYear();
//         const yearOfDeath = person.yearOfDeath || currentYear; 
//         const age = yearOfDeath - person.yearOfBirth;
        
//         if (age > maxAge) {
//             oldest = person.name;
//             maxAge = age;
//             console.log(oldest);
//         }
//     });

//     return oldest;
// };

// Do not edit below this line
module.exports = findTheOldest;
