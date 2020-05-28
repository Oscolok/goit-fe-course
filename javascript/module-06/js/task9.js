// debugger;
import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const sortUser = users.sort((a, b) => a.friends.length - b.friends.length);
  return sortUser.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
