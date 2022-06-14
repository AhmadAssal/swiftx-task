import { isTypeSystemDefinitionNode } from "graphql";
import React from "react";
import styles from "../styles/navbar.module.css";

interface category {
  name: string;
}
interface NavbarProps {
  items: category[];
}
export const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      {items?.map((item) => (
        <a key={item.name} href="google.com" className={styles.navbarItem}>
          {item.name}
        </a>
      ))}
      <img src="logo.png" alt="" className={styles.logo} />
      <img src="cart.png" className={styles.cart} />
    </nav>
  );
};
