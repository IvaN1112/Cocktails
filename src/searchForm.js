import get from './getElement.js';
import presentDrinks from './presentDrinks.js';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const input = get('[name="drink"]');

input.addEventListener('keyup', () => {
  const value = input.value;
  if (!value) {
    presentDrinks(baseURL + 'a');
  }
  const searchURL = baseURL + value;
  presentDrinks(searchURL);
});
