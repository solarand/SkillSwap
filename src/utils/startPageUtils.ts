import design from "./../assets/png/start-page/wes-desighn.jpg";
import buch from "./../assets/png/start-page/buchalter.png";
import advokat from "./../assets/png/start-page/advokat.jpg";
import eng from "./../assets/png/start-page/eng.jpg";
import smm from "./../assets/png/start-page/smm.png";
import santeh from "./../assets/png/start-page/santehjpg.jpg";
import psix from "./../assets/png/start-page/psix.jpg";
import site from "./../assets/png/start-page/website.jpg";

export interface Example {
  img1: string;
  img2: string;
  h1: string;
  h2: string;
}

export const examples: Example[] = [
  {
    img1: design,
    img2: buch,
    h1: "Веб-дизайн",
    h2: "Бухгалтерская помощь",
  },
  {
    img1: advokat,
    img2: smm,
    h1: "Юридические услуги",
    h2: "СММ продвижение",
  },
  {
    img1: eng,
    img2: santeh,
    h1: "Уроки английского",
    h2: "Услуги сантехника",
  },
  {
    img1: psix,
    img2: site,
    h1: "Психологическая помощь",
    h2: "Создание сайта",
  },
];
