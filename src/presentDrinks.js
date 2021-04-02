import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';
export default async (url) => {
  //fetch drinks
  const data = await fetchDrinks(url);

  //display drinks
  const section = await displayDrinks(data);
  //if there are drinks returned from the fetch run this
  if (section) {
    setDrink(section);
  }
};
