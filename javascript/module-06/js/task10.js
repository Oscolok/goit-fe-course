// debugger;
import users from './users.js';

const getSortedUniqueSkills = users => {
  const bigArr = users.reduce((acc, arr) => {
    return [...acc, ...arr.skills];
  }, []);
  const unic = bigArr.filter((value, idx, self) => self.indexOf(value) === idx);
  // const unic = new Set(bigArreys);
  return unic.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
