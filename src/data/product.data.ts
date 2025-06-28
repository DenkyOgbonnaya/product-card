import type { IProduct } from "../types/product.type";

export const products: IProduct[] = [
  {
    id: "1232454",
    title: "A Book",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
    description: "This is an awesome book!",
    price: 19,
    stock: 20,
    variants: [
      {
        label: "sm",
        available: true,
      },
      {
        label: "md",
        available: true,
      },
      {
        label: "lg",
        available: false,
      },
      {
        label: "xl",
        available: true,
      },
    ],
  },
  {
    id: "0.41607315815753076",
    title: "fasfd",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
    description: "fadsfads",
    price: 12,
    stock: 0,
    variants: [
      {
        label: "EU 22",
        available: false,
      },
      {
        label: "EU 26",
        available: true,
      },
      {
        label: "EU 30",
        available: false,
      },
    ],
  },

  {
    id: "1232454",
    title: "A Book",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
    description: "This is an awesome book!",
    price: 50,
    stock: 0,
    variants: [
      {
        label: "sm",
        available: true,
      },
      {
        label: "md",
        available: true,
      },
      {
        label: "lg",
        available: false,
      },
      {
        label: "xl",
        available: true,
      },
    ],
  },
  {
    id: "0.41607315815753076",
    title: "fasfd",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",

    description: "fadsfads",
    price: 12,
    stock: 100,
    variants: [
      {
        label: "sm",
        available: true,
      },
      {
        label: "md",
        available: true,
      },
      {
        label: "lg",
        available: false,
      },
    ],
  },

  {
    id: "0.416073153076",
    title: "fasfd",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",

    description: "fadsfads",
    price: 12,
    stock: 100,
    variants: [
      {
        label: "sm",
        available: true,
      },
      {
        label: "md",
        available: true,
      },
      {
        label: "lg",
        available: false,
      },
    ],
  },

  {
    id: "0.416015753076",
    title: "fasfd",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
    description: "fadsfads",
    price: 12,
    stock: 0,
    variants: [
      {
        label: "EU 22",
        available: false,
      },
      {
        label: "EU 26",
        available: true,
      },
      {
        label: "EU 30",
        available: false,
      },
    ],
  },
];
