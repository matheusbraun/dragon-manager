export default arrayToBeSorted => {
  return arrayToBeSorted.sort((currentDragon, nextDragon) => {
    if (currentDragon.name.toLowerCase() > nextDragon.name.toLowerCase())
      return 1;

    if (currentDragon.name.toLowerCase() < nextDragon.name.toLowerCase())
      return -1;

    return 0;
  });
};
