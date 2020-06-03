// debugger;

const cat = document.querySelector('ul#categories');
console.log(`В списке ${cat.children.length} категории.`);

console.log('');

cat.querySelectorAll('.item').forEach(li => {
  console.log(`Категория: ${li.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${li.querySelector('ul').children.length}`,
  );
});
