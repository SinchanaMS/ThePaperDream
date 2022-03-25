import {
  v4 as uuid
} from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Planners/sunset.png',
    title: "The Paper Dream - Sunset",
    description: "Daily Planner and Organizer, Gratitude and Affirmation Journal with Weekly and Monthly Review - A5, 120GSM",
    price: {
      original: 899,
      discounted: 499,
      discount: 44
    },
    rating: 4.4,
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Planners/rainbow.png',
    title: "The Paper Dream - Rainbow",
    description: "Undated Daily Planner and Journal | To-Do List | Productivity Tracker | Gratitude Journal - A5, 120GSM",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    rating: 4.2,
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Planners/flower.png',
    title: "The Paper Dream - Floral",
    description: "Hardbound Planner | Magnetic Sturdy Box | Goals & Budget Tracker - 22 x 17.5 cm, 100GSM",
    price: {
      original: 869,
      discounted: 699,
      discount: 20
    },
    rating: 4.1,
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Planners/abstract1.png',
    title: "The Paper Dream - Abstract",
    description: "12 Months Undated/Productivity Stickers/Habit Tracker/Hardbound - A5, 90GSM",
    price: {
      original: 625,
      discounted: 499,
      discount: 20
    },
    rating: 4.6,
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Planners/abstract2.png',
    title: "The Paper Dream - Abstract",
    description: "12 Months Undated/Productivity Stickers/Habit Tracker/Hardbound - A5, 90GSM",
    price: {
      original: 625,
      discounted: 499,
      discount: 20
    },
    rating: 3.9,
    categoryName: "Planners",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/aquarius.png',
    title: "The Paper Dream - Aquarius",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/aries.png',
    title: "The Paper Dream - Aries",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 3.9,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/cancer.png',
    title: "The Paper Dream - Cancer",
    description: "100 GSM, Dot Grid, A5, 144 Pages - Bullet Journal Diary",
    price: {
      original: 199,
      discounted: 125,
      discount: 37
    },
    rating: 4.1,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/capricorn.png',
    title: "The Paper Dream - Capricorn",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 250,
      discounted: 199,
      discount: 20
    },
    rating: 4.7,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/gemini.png',
    title: "The Paper Dream - Gemini",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 199,
      discounted: 125,
      discount: 37
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/leo.png',
    title: "The Paper Dream - Leo",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 299,
      discounted: 199,
      discount: 33
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/libra.png',
    title: "The Paper Dream - Libra",
    description: "100 GSM, Dot Grid, A5, 144 Pages - Bullet Journal Diary",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/pisces.png',
    title: "The Paper Dream - Pisces",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 399,
      discounted: 319,
      discount: 20
    },
    rating: 4.5,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/sagittarius.png',
    title: "The Paper Dream - Sagittarius",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 625,
      discounted: 499,
      discount: 20
    },
    rating: 4.7,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/scorpio.png',
    title: "The Paper Dream - Scorpio",
    description: "100 GSM, Dot Grid, A5, 144 Pages - Bullet Journal Diary",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/taurus.png',
    title: "The Paper Dream - Taurus",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 599,
      discounted: 499,
      discount: 17
    },
    rating: 3.8,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/virgo.png',
    title: "The Paper Dream - Virgo",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 250,
      discounted: 199,
      discount: 20
    },
    rating: 4.4,
    categoryName: "Journals",
    subCategory: "Zodiac"
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/journalAbstract.png',
    title: "The Paper Dream - Journal",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 599,
      discounted: 499,
      discount: 17
    },
    rating: 4.7,
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/journalBird.png',
    title: "The Paper Dream - Journal",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 250,
      discounted: 199,
      discount: 20
    },
    rating: 4.4,
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/journalDolphin.png',
    title: "The Paper Dream - Journal",
    description: "All Purpose Journals: A5, Hard Cover, Ruled, 192 Pages",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.4,
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/journalMoon.png',
    title: "The Paper Dream - Journal",
    description: "A5 Dot Grid, 208 Pages- 120 GSM, Hardcover",
    price: {
      original: 625,
      discounted: 499,
      discount: 20
    },
    rating: 4.4,
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Journals/journalSun.png',
    title: "The Paper Dream - Journal",
    description: "100 GSM, Dot Grid, A5, 144 Pages - Bullet Journal Diary",
    price: {
      original: 599,
      discounted: 499,
      discount: 17
    },
    rating: 4.1,
    categoryName: "Journals",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/bluefoil.avif',
    title: "PrintedHeron - Blue Foil",
    description: "Foil Washi Tape Set 10pc for Journal, Planner, and Scrapbook",
    price: {
      original: 299,
      discounted: 199,
      discount: 33
    },
    rating: 3.9,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/celestial.avif',
    title: "OuterSpace - Celestial",
    description: "Outer Space Gold Foil Washi Tape Samples - Journals, Scrapbooks, Crafts",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.2,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/celestial1.webp',
    title: "Sea of Stars",
    description: "Constellations Foil Washi Tape, Decorative Scrapbook Sticker, Bullet Journal Planner",
    price: {
      original: 250,
      discounted: 199,
      discount: 20
    },
    rating: 3.9,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/celestial2.webp',
    title: "OuterSpace - Celestial",
    description: "Galaxy Washi Tape | Space Theme | Starry Night",
    price: {
      original: 399,
      discounted: 269,
      discount: 33
    },
    rating: 3.8,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/foil.png',
    title: "PrintedHeron - Blue Foil",
    description: "Foil Washi Tape Set 10pc for Journal, Planner, and Scrapbook",
    price: {
      original: 599,
      discounted: 499,
      discount: 17
    },
    rating: 3.6,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/grids.avif',
    title: "Griddy Washi Tapes",
    description: "Grid | Washi Tape | Planner | Journal | Decorative Tape",
    price: {
      original: 299,
      discounted: 199,
      discount: 33
    },
    rating: 4.1,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/leaves.png',
    title: "Autumn Breeze",
    description: "Leaves Washi | Scrapbooking | Journaling | Journal Supplies ",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.2,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/vintage.png',
    title: "Around the World",
    description: "Vintage Design Washi Tape, Retro Style Washi Tape",
    price: {
      original: 399,
      discounted: 269,
      discount: 33
    },
    rating: 4.0,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/vintage.webp',
    title: "Vintage Tapes",
    description: "Asian Culture Vintage Washi Tape",
    price: {
      original: 190,
      discounted: 181,
      discount: 5
    },
    rating: 4.1,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Washi_Tapes/vintage2.png',
    title: "Vintage Tapes",
    description: "Vintage Design Washi Tape, Retro Style Washi Tape",
    price: {
      original: 299,
      discounted: 199,
      discount: 33
    },
    rating: 3.9,
    categoryName: "Washi Tapes",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Tombow_DualBrushPen.webp',
    title: "Tombow Dual Brush Pen",
    description: "Tombow Dual Brush Pen AB-T - Grayscale Set of 6",
    price: {
      original: 599,
      discounted: 499,
      discount: 17
    },
    rating: 4.2,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Tombow_DualBrushPen_2.webp',
    title: "Tombow Dual Brush Pen",
    description: "Tombow Dual Brush Pen - Landscape Palette",
    price: {
      original: 599,
      discounted: 399,
      discount: 33
    },
    rating: 4.4,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Brustro_metallic.jpg',
    title: "Brustro Brush Pen",
    description: "Brustro Brush Pens - Metallic for Journals/Planners",
    price: {
      original: 399,
      discounted: 319,
      discount: 20
    },
    rating: 4.5,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Fineliners.jpg',
    title: "Fineliners - All Colors",
    description: "Fineliners for Journals/ Planners - Set of 36",
    price: {
      original: 799,
      discounted: 599,
      discount: 25
    },
    rating: 4.3,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Micron_Fineliner.webp',
    title: "Micron Fineliners",
    description: "Fineliners for Journals/Planners by Micron",
    price: {
      original: 650,
      discounted: 525,
      discount: 19
    },
    rating: 4.1,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Pentel_BrushPen.webp',
    title: "Pentel Brush Pen",
    description: "Fibre Tip Brush Pens - Set of 6 - For Journals | Planners",
    price: {
      original: 605,
      discounted: 549,
      discount: 9
    },
    rating: 4.3,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Pentel_Fineliner.webp',
    title: "Pentel Fineliners",
    description: "Fineliners for Journals/ Planners - Set of 6",
    price: {
      original: 650,
      discounted: 525,
      discount: 19
    },
    rating: 4.3,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Schneider_Highlighters.jpg',
    title: "Schneider Highlighters",
    description: "Schneider Highlighters - Pastel Colors",
    price: {
      original: 599,
      discounted: 399,
      discount: 33
    },
    rating: 4.6,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Uniball_Fineliner.webp',
    title: "Uni-Ball Fineliners",
    description: "Uni-Ball Fineliner Drawing Pen - Set of 5",
    price: {
      original: 199,
      discounted: 125,
      discount: 37
    },
    rating: 4.3,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Uniball_Fineliner2.webp',
    title: "Uni-Ball Fineliners",
    description: "Uni-Ball Fineliners Waterproof - Set of 12",
    price: {
      original: 599,
      discounted: 399,
      discount: 33
    },
    rating: 4.2,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Zebra_BrushPen_Warm.webp',
    title: "Zebra Brush Pens",
    description: "Zebra Brush Pens - Warm Colors - Set of 5",
    price: {
      original: 250,
      discounted: 199,
      discount: 20
    },
    rating: 4.3,
    categoryName: "Pens",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Pens/Zebra_BrushPen.webp',
    title: "Zebra Brush Pens",
    description: "Zebra Brush Pens - Mild Colors - Set of 5",
    price: {
      original: 399,
      discounted: 269,
      discount: 33
    },
    rating: 4.4,
    categoryName: "Pens",
  },

  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/alph.jpg',
    title: "Wooden Stamps",
    description: "Stamps for Journals - Wooden, Alphabets",
    price: {
      original: 499,
      discounted: 399,
      discount: 20
    },
    rating: 3.3,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/floral.jpg',
    title: "Clear Stamps ",
    description: "Stamps for Journals - Clear, Floral",
    price: {
      original: 699,
      discounted: 390,
      discount: 44
    },
    rating: 4.1,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/months.png',
    title: "Wooden Stamps - 12 Months",
    description: "Stamps for Journals - Wooden, Months",
    price: {
      original: 699,
      discounted: 399,
      discount: 43
    },
    rating: 3.7,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/months2.png',
    title: "Wooden Stamps - 12 Months",
    description: "Stamps for Journals - Wooden, Months",
    price: {
      original: 299,
      discounted: 269,
      discount: 10
    },
    rating: 4.3,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/space.jpg',
    title: "Wooden Stamps - OuterSpace",
    description: "Stamps for Journals - Outer Space",
    price: {
      original: 299,
      discounted: 269,
      discount: 10
    },
    rating: 4.3,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/tracker.png',
    title: "Clear Stamps",
    description: "Stamps for Journals - Tracker Stamps",
    price: {
      original: 600,
      discounted: 349,
      discount: 42
    },
    rating: 4.1,
    categoryName: "Stamps",
  },
  {
    _id: uuid(),
    prodimage: process.env.PUBLIC_URL + 'assets/Product_Images/Stamps/weekdays.jpg',
    title: "Wooden Stamps - The Week",
    description: "Stamps for Journals - Wooden, Weekdays",
    price: {
      original: 199,
      discounted: 125,
      discount: 37
    },
    rating: 3.8,
    categoryName: "Stamps",
  },
];