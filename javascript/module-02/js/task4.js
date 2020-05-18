'use strict';
// debugger;

const formatString = function (string) {
  const rowСonstraint = 40;
  if (string.length <= rowСonstraint) {
    const unformattedString = string;
    return unformattedString;
  } else {
    let formattedString = ``;
    for (let i = 0; i < rowСonstraint - 1; i += 1) {
      formattedString = formattedString + string[i];
    }
    const result = formattedString + `...`;
    return result;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
