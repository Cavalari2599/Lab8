const createEpisodeHTML = (episode) => {
  const rating = Math.round(episode.rating) || 0;
  return `<div class="episode episode-${episode.number} rating-${rating}" title="E${episode.number}">${rating}</div>`;
};

const createSeasonHTML = (data, number) => {
  const episodes = data.map(ep => createEpisodeHTML(ep)).join("");
  return `
    <article class="season">
      <header class="season-header">T${number}</header>
      ${episodes}
    </article>
  `;
};

export const createSeasonListHTML = (seasons) => {
  return Object.values(seasons)
    .map((season, index) => createSeasonHTML(season, index + 1))
    .join("");
};