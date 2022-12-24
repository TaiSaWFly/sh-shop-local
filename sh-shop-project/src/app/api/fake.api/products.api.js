import id from "react-id-generator";
import api from "..";
import { randomNumber } from "../../utils/randomNumber";
import _ from "lodash";

const products = [
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt1.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 600),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_5", "size_3", "size_4"],
    color: ["color_1", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt1.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_6",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3"],
    color: ["color_1", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt1.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "17.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 10),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_6",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_5"],
    color: ["color_1", "color_2", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt1.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "10.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_6",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt1.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
      { imgUrl: "assets/img/clothers/burnt1.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "13.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_6",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt2.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "13.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_7",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt2.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "16.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_7",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt2.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_7",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt2.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_7",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt2.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
      { imgUrl: "assets/img/clothers/burnt2.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_7",
    popular: "popular_1",
    newArrivals: true,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_8",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_2",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_2",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_2",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_2",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_2",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt5.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt5.webp" },
      { imgUrl: "assets/img/clothers/burnt5.webp" },
      { imgUrl: "assets/img/clothers/burnt5.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_3",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt5.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt5.webp" },
      { imgUrl: "assets/img/clothers/burnt5.webp" },
      { imgUrl: "assets/img/clothers/burnt5.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_3",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt6.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_3",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },

  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt6.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_3",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt6.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
      { imgUrl: "assets/img/clothers/burnt6.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_3",
    popular: "popular_1",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt7.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt7.webp" },
      { imgUrl: "assets/img/clothers/burnt7.webp" },
      { imgUrl: "assets/img/clothers/burnt7.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_4",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt7.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt7.webp" },
      { imgUrl: "assets/img/clothers/burnt7.webp" },
      { imgUrl: "assets/img/clothers/burnt7.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_4",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt8.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_4",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt8.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_4",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt8.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_4",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt9.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt9.webp" },
      { imgUrl: "assets/img/clothers/burnt9.webp" },
      { imgUrl: "assets/img/clothers/burnt9.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_5",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt10.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_5",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt10.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_5",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt10.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_5",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt10.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
      { imgUrl: "assets/img/clothers/burnt10.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_5",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  //////////////////////////// Men
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt11.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_1",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt11.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_1",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt11.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
      { imgUrl: "assets/img/clothers/burnt11.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_1",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt12.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt12.webp" },
      { imgUrl: "assets/img/clothers/burnt12.webp" },
      { imgUrl: "assets/img/clothers/burnt12.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_1",
    popular: "popular_2",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt13.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt13.webp" },
      { imgUrl: "assets/img/clothers/burnt13.webp" },
      { imgUrl: "assets/img/clothers/burnt13.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_2",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt13.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt13.webp" },
      { imgUrl: "assets/img/clothers/burnt13.webp" },
      { imgUrl: "assets/img/clothers/burnt13.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_2",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_2",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_2",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_2",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt15.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_6",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt15.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_6",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt15.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_6",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt15.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_6",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt15.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
      { imgUrl: "assets/img/clothers/burnt15.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_6",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt16.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_7",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt16.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_7",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt16.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_7",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt16.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_7",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt16.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
      { imgUrl: "assets/img/clothers/burnt16.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",

    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_7",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt18.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_4",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt18.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_4",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt18.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_4",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt18.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_4",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt18.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
      { imgUrl: "assets/img/clothers/burnt18.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_4",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt19.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt19.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt19.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt19.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt19.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
      { imgUrl: "assets/img/clothers/burnt19.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt20.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt20.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt20.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
      { imgUrl: "assets/img/clothers/burnt20.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_5",
    popular: "popular_4",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_1",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_1",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_1",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_1",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_1",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_9",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_9",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_9",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_9",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt3.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
      { imgUrl: "assets/img/clothers/burnt3.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_1",
    category: "category_9",
    popular: "popular_1",
    newArrivals: false,
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_9",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_9",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_9",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_9",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_2",
    category: "category_9",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt14.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
      { imgUrl: "assets/img/clothers/burnt14.webp" },
    ],
    name: "Double-Layered Top",
    prices: { price: "28.89", newPrice: "20.84" },
    articleNumber: "123449992378",
    rate: randomNumber(0, 5),
    numberOfSales: randomNumber(0, 1000),
    collection: "collection_3",
    category: "category_8",
    popular: "popular_3",
    size: ["size_1", "size_2", "size_3", "size_4", "size_5"],
    color: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },

  ///// commingSoonProducts
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt8.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt4.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
      { imgUrl: "assets/img/clothers/burnt4.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt17.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
      { imgUrl: "assets/img/clothers/burnt17.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
  {
    id: id("product_"),
    imgUrl: "assets/img/clothers/burnt8.webp",
    otherImg: [
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
      { imgUrl: "assets/img/clothers/burnt8.webp" },
    ],
    name: "Double-Layered Top",
    articleNumber: "123449992378",
    collection: "collection_4",
    description:
      "Classic casual t-shirt for women on the move. 100% cotton. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products);
    }, 1000);
  });

const getProductById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.find((p) => p.id === id));
    }, 1000);
  });

const getProductByIds = (ids) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const getProducts = getProdctsByIds(ids, products);
      resolve(getProducts);
    }, 1000);
  });

const getProductsByCollectionId = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.filter((p) => p.collection === id));
    });
  });

const getProductsByCategoryId = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.filter((p) => p.category === id));
    });
  });

const getProductsByNewArrivals = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.filter((p) => p.newArrivals));
    }, 1000);
  });

const getProductsByCollectionIdAndCategoryId = (collectionId, categoryId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const filteredProducts = filteredProductsByCollectionIdAndCategoryId(
        collectionId,
        categoryId
      );
      resolve(filteredProducts);
    });
  });

const getProductsByCollectionPathAndCategoryPath = (
  collectionPath,
  categoryPath
) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const collectionId = await api.collections
        .getCollectionIdByPath(collectionPath)
        .then((data) => data);
      const categoryId = await api.categories
        .getCategoryIdByPath(categoryPath)
        .then((data) => data);
      const filteredProducts = filteredProductsByCollectionIdAndCategoryId(
        collectionId,
        categoryId
      );
      resolve(filteredProducts);
    });
  });

const getPopularProducts = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const filterByRate = products.filter((p) => p.rate);
      const sortByRate = _.orderBy(filterByRate, ["rate"], ["desc"]);
      resolve(sortByRate);
    }, 1000);
  });

const getNewArrivalsProducts = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.filter((p) => (p.newArrivals ? p : false)));
    }, 1000);
  });

const getProductsBySales = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const filterBySales = products.filter((p) => p.numberOfSales);
      const sortBySales = _.orderBy(filterBySales, ["numberOfSales"], ["desc"]);
      resolve(sortBySales);
    }, 1000);
  });

const getProductsOfOffers = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const filterByPrice = products.filter((p) => p.prices);
      const filterByNewPrice = filterByPrice.filter((p) => p.prices.newPrice);
      const sortByNewPrice = _.orderBy(
        filterByNewPrice,
        ["prices.newPrice"],
        ["asc"]
      );
      resolve(sortByNewPrice);
    }, 1000);
  });

function filteredProductsByCollectionIdAndCategoryId(collectionId, categoryId) {
  const filteredProducts = products.filter(
    (p) => p.collection === collectionId && p.category === categoryId
  );
  return filteredProducts;
}

function getProdctsByIds(dataIds, data) {
  const newData = [];
  for (const dataId of dataIds) {
    for (const d of data) {
      if (d.id === dataId) {
        newData.push(d);
      }
    }
  }
  return newData;
}

const functions = {
  fetchAll,
  getProductById,
  getProductByIds,
  getProductsByCollectionId,
  getProductsByCategoryId,
  getProductsByNewArrivals,
  getProductsByCollectionIdAndCategoryId,
  getProductsByCollectionPathAndCategoryPath,
  getPopularProducts,
  getNewArrivalsProducts,
  getProductsBySales,
  getProductsOfOffers,
};

export default functions;
