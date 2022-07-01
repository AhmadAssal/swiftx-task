import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/CartButton.module.css";
import Link from "next/link";
import { Product } from "../types/Product";
import { CartItem } from "./CartItem";
import { Price } from "../types/Price";
import { Item } from "../types/Item";

import { Attribute } from "../types/Attribute";
import { useRecoilState } from "recoil";
import { currency } from "../state/currency";

import { AttributeButton } from "./AttributeButton";
import attributeStyles from "../styles/attribute.module.css";

interface CartItemProps {
  brand: string;
  itemName: string;
  prices: Price[];
  attributes: Attribute[];
  gallery: string[];
  chosenAttribute: any;
  passedAmount: number;
}

export const CartModalItem = ({
  brand,
  itemName,
  prices,
  attributes,
  gallery,
  chosenAttribute,
  passedAmount,
}: CartItemProps) => {
  const [products, setProducts] = useState([]);
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const [amount, setAmount] = useState(passedAmount);

  const price: Price[] = prices.filter(
    (price: Price) => price.currency.symbol === chosenCurrency
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      let productsJson = localStorage.getItem("cart");
      let stuff = [];
      if (productsJson) stuff = JSON.parse(productsJson);
      setProducts(stuff);
    }
  }, []);
  return (
    <div style={{ margin: "1rem", display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <h3>{brand}</h3>
        <h3>{itemName}</h3>
        {price ? <h3>{price[0].amount + price[0].currency.symbol}</h3> : <></>}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          style={{
            width: "2rem",
            height: "2rem",
            margin: "auto",
            float: "right",
            fontSize: "2rem",
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "black",
          }}
          onClick={() => {
            setAmount(amount + 1);
          }}
        >
          +
        </button>
        <p style={{ margin: "auto" }}>{amount}</p>
        <button
          style={{
            width: "2rem",
            height: "2rem",
            margin: "auto",
            fontSize: "2rem",
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "black",
          }}
          onClick={() => {
            if (amount > 0) setAmount(amount - 1);
          }}
        >
          -
        </button>
      </div>
      <img
        src={gallery[0]}
        style={{
          display: "inline-block",
          float: "right",
          width: "20%",
          height: "auto",
          maxHeight: "100%",
          margin: "auto",
        }}
      />
    </div>
  );
};
