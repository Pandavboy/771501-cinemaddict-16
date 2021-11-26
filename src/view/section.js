export const sectionTemplate = (films) => (
  `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container">
  ${films()}
  </div>
  </section>
  </section>`
);
