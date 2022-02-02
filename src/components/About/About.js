import "./About.css";

function About() {
  return (
    <section class="section about">
      <h2 class="section__title">О проекте</h2>
      <div class="about__info">
        <h3 class="about__title">Дипломный проект включал 5 этапов</h3>
        <p class="about__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 class="about__title">На выполнение диплома ушло 5 недель</h3>
        <p class="about__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div class="about__schema">
        <span class="about__schema-oneweek">1 неделя</span>
        <span class="about__schema-fourweeks">4 недели</span>
      </div>
    </section>
  );
}

export default About;
