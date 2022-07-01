import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/cart.module.css";
import { CartItem } from "../components/CartItem";
import { cart } from "../state/cart";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { productsByCategory } from "../graphql/queries";

const Cart: NextPage = () => {
  const [globalCart, setGlobalCart] = useRecoilState<any>(cart);
  console.log(globalCart);
  useEffect(() => {
    console.log(globalCart);
  }, [globalCart]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let productsJson = localStorage.getItem("cart");
      let stuff = [];
      if (productsJson) stuff = JSON.parse(productsJson);
      setProducts(stuff);
    }
  });
  return (
    <div className={styles.container}>
      {products.map((product: Product) => (
        <CartItem
          brand={product.brand}
          itemName={product.name}
          prices={product.prices}
          gallery={product.gallery}
          attributes={product.attributes}
          chosenAttribute={product.chosenAttribute}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
