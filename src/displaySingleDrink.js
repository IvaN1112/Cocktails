import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';
const displayDrink = (drinksData) => {
  hideLoading();
  const drinkImg = get('.drink-img');
  const drinkName = get('.drink-name');
  const drinkDesc = get('.drink-description');
  const drinkIngredients = get('.drink-ingredients');
  const drink = drinksData.drinks[0];
  console.log(drink);
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  drinkImg.src = image;
  drinkName.innerText = name;
  document.title = name;
  drinkDesc.innerText = desc;
  drinkIngredients.innerHTML = ingredients
    .map((ingredient) => {
      if (ingredient) {
        return `<li><i class="fas fa-check-double"></i>${ingredient}</li>`;
      }
    })
    .join('');
};

export default displayDrink;
