import React, { useState } from "react";
import styles from "../styles/CartButton.module.css";
import Link from "next/link";
import { AttributeButton } from "../components/AttributeButton";
import { Price } from "../types/Price";
import { Attribute } from "../types/Attribute";
import { useRecoilState } from "recoil";
import { currency } from "../state/currency";
import { Item } from "../types/Item";
import cartStyles from "../styles/cart.module.css";
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

export const CartItem = ({
  brand,
  itemName,
  prices,
  attributes,
  gallery,
  chosenAttribute,
  passedAmount,
}: CartItemProps) => {
  const [amount, setAmount] = useState(passedAmount);
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const price: Price[] = prices.filter(
    (price: Price) => price.currency.symbol === chosenCurrency
  );
  return (
    <div style={{ margin: "2rem", display: "flex", flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <h1>{brand}</h1>
        <h2>{itemName}</h2>
        {price ? <h3>{price[0].amount + price[0].currency.symbol}</h3> : <></>}
        <div style={{ display: "inline-block" }}>
          {attributes ? (
            attributes.map((attribute: Attribute) => {
              return (
                <div>
                  {/* <h2>{attribute.name}</h2> */}
                  {attribute.items.map((item: Item) => {
                    let chosen = false;
                    if (item.value === chosenAttribute[attribute.name])
                      chosen = true;
                    return (
                      <AttributeButton
                        option={item.displayValue}
                        className={chosen ? attributeStyles.chosen : ""}
                        onClick={() => {
                          const name = attribute.name;
                          const value = item.value;
                          // setChosenAttribute({
                          //   ...chosenAttribute,
                          //   [name]: value,
                          // });
                        }}
                      ></AttributeButton>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          style={{
            width: "3rem",
            height: "3rem",
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
            width: "3rem",
            height: "3rem",
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
