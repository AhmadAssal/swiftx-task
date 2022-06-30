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

interface CartItemProps {
  brand: string;
  itemName: string;
  prices: Price[];
  attributes: Attribute[];
  gallery: string[];
}

export const CartItem = ({
  brand,
  itemName,
  prices,
  attributes,
  gallery,
}: CartItemProps) => {
  const [amount, setAmount] = useState(1);
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const price: Price[] = prices.filter(
    (price: Price) => price.currency.symbol === chosenCurrency
  );
  return (
    <div>
      <h1>{brand}</h1>
      <h2>{itemName}</h2>
      <h3>{price[0].amount + price[0].currency.symbol}</h3>
      <div>
        {attributes.map((attribute: Attribute) => {
          return (
            <div>
              {/* <h2>{attribute.name}</h2> */}
              {attribute.items.map((item: Item) => (
                <AttributeButton
                  option={item.displayValue}
                  onClick={() => {
                    const name = attribute.name;
                    const value = item.value;
                    //   setChosenAttribute({
                    //     ...chosenAttribute,
                    //     [name]: value,
                    //   }
                    //   );
                  }}
                ></AttributeButton>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};