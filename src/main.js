import {renderTemplate, RenderPosition} from './render.js';
import {createUserRankTemplate} from './view/user-rank-view.js';
import {createNavigationMenuTemplate} from './view/navigation-menu-view.js';
import {createSortMoviesTemplate} from './view/sort-movies-view.js';
import {createTopRatedMoviesTemplate} from './view/top-rated-movies-view.js';
import {createTopCommentTemplate} from './view/top-comment-movies-view.js';
import {createFilmCardsTemplate} from './view/content-movies-view.js';
import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
import {createFooterStatsTamplate} from './view/footer-stats-view.js';
import {popupTemplate} from './view/popup-view.js';

const siteHeaderElement = document.querySelector('.header');
const siteHeaderLogoElement = siteHeaderElement.querySelector('.header__logo');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStats = siteFooterElement.querySelector('.footer__statistics');


const CARD_COUNT = 5;


renderTemplate(siteHeaderLogoElement, createUserRankTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createNavigationMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSortMoviesTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createTopRatedMoviesTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterStats, createFooterStatsTamplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, popupTemplate(), RenderPosition.AFTEREND);


const siteFilmCard = siteMainElement.querySelector('.films-list__container');
const siteTopComment = siteMainElement.querySelector('.films');


for(let i=0; i < CARD_COUNT; i++ ) {
  renderTemplate(siteFilmCard, createFilmCardsTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(siteTopComment, createTopCommentTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilmCard, createShowMoreButtonTemplate(), RenderPosition.AFTEREND);

