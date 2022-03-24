import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Planners",
    categoryImage: process.env.PUBLIC_URL + 'assets/Categories_Images/planners.webp'
  },
  {
    _id: uuid(),
    categoryName: "Journals",
    categoryImage: process.env.PUBLIC_URL + 'assets/Categories_Images/journals.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Washi Tapes",
    categoryImage: process.env.PUBLIC_URL + 'assets/Categories_Images/washiTapes.webp'
  },
  {
    _id: uuid(),
    categoryName: "Pens",
    categoryImage: process.env.PUBLIC_URL + 'assets/Categories_Images/pens.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Stamps",
    categoryImage: process.env.PUBLIC_URL + 'assets/Categories_Images/stamps.webp'
  }
];
