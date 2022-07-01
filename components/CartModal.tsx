import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/CartButton.module.css";
import Link from "next/link";
import { Product } from "../types/Product";
import { CartItem } from "./CartItem";
import { CartModalItem } from "./CartModalItem";

interface CartModalProps {
  //   onclick: () => void;
}

export const CartModal = ({}: CartModalProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let productsJson = localStorage.getItem("cart");
      let stuff = [];
      if (productsJson) stuff = JSON.parse(productsJson);
      setProducts(stuff);
    }
  }, []);
  return (
    <div style={{ width: "30rem", height: "auto", textAlign: "left" }}>
      <h3 style={{ marginBottom: "1rem" }}>My Bag</h3>
      <div className={styles.container}>
        {products.map((product: Product) => (
          <div>
            <CartModalItem
              brand={product.brand}
              itemName={product.name}
              prices={product.prices}
              gallery={product.gallery}
              attributes={product.attributes}
              chosenAttribute={product.chosenAttribute}
              passedAmount={product.amount}
            ></CartModalItem>
          </div>
        ))}
      </div>
      <p style={{ display: "inline-block" }}>Total:</p>
      <p style={{ display: "inline-block" }}>98</p>
      <div style={{ display: "block" }}>
        <Link href="/cart">
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              cursor: "pointer",
              margin: "1rem 1rem 1rem 0rem",
              padding: "1rem",
              width: "fit-content",
              textAlign: "center",
            }}
          >
            View Bag
          </button>
        </Link>
        <button
          style={{
            width: "auto",
            padding: "1rem",
            backgroundColor: "#5ece7b",
            color: "white",
            height: "3rem",
            border: "0px",
            marginBottom: "2rem",
          }}
        >
          {" "}
          Checkout
        </button>
      </div>
    </div>
  );
};
