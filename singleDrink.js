import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

window.addEventListener('DOMContentLoaded', async () => {
  const id = localStorage.getItem('drinkID');
  if (!id) {
    window.location.replace('index.html');
  }
  {
    const drinkInfo = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drinkInfo);
  }
});
