import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/cart.module.css";
import { CartItem } from "../components/CartItem";
const attributes = [
  {
    name: "Size",
    type: "text",
    items: [
      {
        displayValue: "40",
        value: "40",
      },
      {
        displayValue: "41",
        value: "41",
      },
    ],
  },
];
const gallery = [
  "https://tradelinestores.s3.amazonaws.com/media/product_images/40f36622-ef43-420b-b8ec-98f13a9f4c2b.jpg",
  "https://arabhardware.net/wp-content/uploads/2020/11/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large_.jpg",
];

const prices = [
  {
    currency: {
      label: "USD",
      symbol: "$",
    },
    amount: 144.69,
  },
  {
    currency: {
      label: "GBP",
      symbol: "£",
    },
    amount: 104,
  },
  {
    currency: {
      label: "AUD",
      symbol: "A$",
    },
    amount: 186.65,
  },
  {
    currency: {
      label: "JPY",
      symbol: "¥",
    },
    amount: 15625.24,
  },
  {
    currency: {
      label: "RUB",
      symbol: "₽",
    },
    amount: 10941.76,
  },
];
const Cart: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>CART</h1>
      <CartItem
        brand="Apple"
        itemName="Macbook Air"
        attributes={attributes}
        gallery={gallery}
        prices={prices}
      ></CartItem>
      <CartItem
        brand="Apple"
        itemName="Macbook Air"
        attributes={attributes}
        gallery={gallery}
        prices={prices}
      ></CartItem>
      <CartItem
        brand="Apple"
        itemName="Macbook Air"
        attributes={attributes}
        gallery={gallery}
        prices={prices}
      ></CartItem>
    </div>
  );
};

export default Cart;
