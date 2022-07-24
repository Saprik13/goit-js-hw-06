
const categoriesList = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesList.length);

// for (const category of categoriesList) {
//   console.log('Category:', category.firstElementChild.textContent);
//   console.log('Elements:', category.lastElementChild.children.length);
// }

  categoriesList.forEach((category) => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
  });