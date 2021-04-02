import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
export default ({ drinks }) => {
  const title = get('.title');
  const section = get('.section-center');
  //hide previouly loaded images
  if (!drinks) {
    hideLoading();
    title.innerHTML = 'Sorry, no cocktails matched your search.';
    section.innerHTML = '';
    return;
  }
  //map images html
  const drinksHTML = drinks
    .map((drink) => {
      const { strDrink: name, idDrink: id, strDrinkThumb: src } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${src}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  //hide previous no returned images message(if any)
  title.innerHTML = '';
  //put the mapped code in the images section
  section.innerHTML = drinksHTML;
  return section;
};
