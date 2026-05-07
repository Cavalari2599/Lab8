const createEpisodeHTML = (episode) => {
  const rating = episode.rating ?? 0;
  const ratingRounded = Math.round(rating) || 0;
  return `<div class="episode episode-${episode.number} rating-${ratingRounded}" title="E${episode.number}">${rating || "?"}</div>`;
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