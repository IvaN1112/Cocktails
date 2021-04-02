const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    const imgID = e.target.parentElement.dataset.id;
    localStorage.setItem('drinkID', imgID);
  });
};

export default setDrink;
