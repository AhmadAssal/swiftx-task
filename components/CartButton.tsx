import React from "react";
import styles from "../styles/CartButton.module.css";
import Link from "next/link";

interface ButtonProps {
  onclick: () => void;
}

export const CartButton = ({ onclick }: ButtonProps) => {
  return (
    <button className={styles.cartButton} onClick={onclick}>
      Add To Cart
    </button>
  );
};
