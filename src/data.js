const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

export const CATEGORIES = [
  {
    name: "Ferns",
    lg: require("@assets/buttonIcon1.png"),
    sm: require("@assets/shopPlantsIcon1.png"),
  },
  {
    name: "Sprouts",
    lg: require("@assets/buttonIcon2.png"),
    sm: require("@assets/shopPlantsIcon2.png"),
  },
  {
    name: "Seedlings",
    lg: require("@assets/buttonIcon3.png"),
    sm: require("@assets/shopPlantsIcon3.png"),
  },
  {
    name: "Foliage",
    lg: require("@assets/buttonIcon4.png"),
    sm: require("@assets/shopPlantsIcon4.png"),
  },
  {
    name: "Care",
    lg: require("@assets/buttonIcon5.png"),
    sm: require("@assets/shopPlantsIcon5.png"),
  },
];

export const APPOINTMENT = {
  date: "14 Oct 2020",
  time: "12:30 PM",
  address: "123 Plant Street, 1/1 …",
};

export const STATS = [
  { label: "Credit", value: "RM100.00" },
  { label: "Points", value: "10" },
  { label: "Package", value: "1" },
];

export const SERVICES = [
  { id: "s1", name: "Lorem ipsum dolor sit amet consectetur", price: 10 },
  { id: "s2", name: "Lorem ipsum dolor sit amet consectetur", price: 10 },
  { id: "s3", name: "Lorem ipsum dolor sit amet consectetur", price: 10 },
];

export const TRENDING = [
  { id: "t1", name: LOREM },
  { id: "t2", name: `${LOREM}. Lorem ipsum dolor sit amet` },
  { id: "t3", name: `${LOREM}. Lorem ipsum dolor sit amet` },
  { id: "t4", name: LOREM },
  { id: "t5", name: `${LOREM}. Lorem` },
  { id: "t6", name: `${LOREM}. Lorem ipsum dolor sit amet` },
  { id: "t7", name: `${LOREM}. Lorem ipsum dolor sit amet` },
  { id: "t8", name: `${LOREM}. Lorem` },
];

export const PRODUCTS = [
  { id: "p0", name: `#0 ${LOREM}`, price: 100 },
  { id: "p1", name: `#1 ${LOREM}`, price: 50, wasPrice: 100 },
  { id: "p2", name: `#2 ${LOREM}`, price: 100 },
  { id: "p3", name: `#3 ${LOREM}`, price: 50, wasPrice: 100 },
  { id: "p4", name: `#4 ${LOREM}`, price: 100 },
  { id: "p5", name: `#5 ${LOREM}`, price: 50, wasPrice: 100 },
];

export const LOCATIONS = [
  {
    id: "l1",
    name: "Sunway Pyramid",
    address:
      "10 Floor, Lorem Ipsum Mall,\nJalan ss23 Lorem, Selangor, Malaysia",
    hours: "10am - 10pm",
  },
  {
    id: "l2",
    name: "The Gardens Mall",
    address:
      "10 Floor, Lorem Ipsum Mall,\nJalan ss23 Lorem, Selangor, Malaysia",
    hours: "10am - 10pm",
  },
];
