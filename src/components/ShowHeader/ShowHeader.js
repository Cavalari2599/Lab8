export const createShowHeaderHTML = (show) => {
  return `
    <img class="poster" src="${show.image}" alt="${show.name}">
    <h1>${show.name}</h1>
  `;
};