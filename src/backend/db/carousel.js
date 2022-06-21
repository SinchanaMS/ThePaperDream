import { v4 as uuid } from "uuid";

export const carousel = [
  {
    _id: uuid(),
    carouselName: "Journals - Zodiac Series",
    carouselSubtitle: "Starting at Rs. 125",
    carouselImg:
      process.env.PUBLIC_URL + "assets/Carousel_Images/carousel3.png",
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    carouselName: "Planners - Pastel Collection",
    carouselSubtitle: "Starting at Rs. 499",
    carouselImg: process.env.PUBLIC_URL + "assets/Carousel_Images/carousel.jpg",
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    carouselName: "Washi Tapes - Celestial Collection",
    carouselSubtitle: "Starting from Rs. 190",
    carouselImg:
      process.env.PUBLIC_URL + "assets/Carousel_Images/carousel2.png",
    categoryName: "Washi Tapes",
  },
];
