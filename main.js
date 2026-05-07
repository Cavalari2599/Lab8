import { getShowData, getEpisodeList } from "./services/tvmaze.js";
import { createShowHeaderHTML } from "./components/ShowHeader/ShowHeader.js";
import { createSeasonListHTML } from "./components/SeasonList/SeasonList.js";

const ID = "2993";

const $header = document.querySelector("header");
const $episodes = document.querySelector(".episodes");

const show = await getShowData(ID);
const seasons = await getEpisodeList(ID);

$header.setHTMLUnsafe(createShowHeaderHTML(show));
$episodes.setHTMLUnsafe(createSeasonListHTML(seasons));