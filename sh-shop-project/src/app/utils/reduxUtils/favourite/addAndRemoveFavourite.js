export function addAndRemoveFavourite(favourite, id) {
  let cloneFavourite = [...favourite];
  const index = favourite.findIndex((f) => f === id);
  index !== -1 ? cloneFavourite.splice(index, 1) : cloneFavourite.push(id);

  return cloneFavourite;
}
