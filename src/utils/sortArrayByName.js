export default arrayToBeSorted => {
  return arrayToBeSorted.sort((currentDragon, nextDragon) => {
    if (currentDragon.name > nextDragon.name) return 1;

    if (currentDragon.name < nextDragon.name) return -1;

    return 0;
  });
};
