import React from "react";
import styles from "../styles/CartButton.module.css";
import Link from "next/link";

interface ButtonProps {}

export const CartButton = ({}: ButtonProps) => {
  return <button className={styles.cartButton}>Add To Cart</button>;
};
