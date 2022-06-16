import React from "react";
import styles from "../styles/navbar.module.css";
import { navBar } from "../graphql/queries";
import { useQuery } from "@apollo/client";

interface category {
  name: string;
}

export const Navbar = () => {
  const { loading, error, data } = useQuery(navBar);
  return (
    <nav className={styles.navbar}>
      {data?.categories?.map((item: category) => (
        <a key={item.name} href="google.com" className={styles.navbarItem}>
          {item.name}
        </a>
      ))}
      <img src="logo.png" alt="" className={styles.logo} />
      <img src="cart.png" className={styles.cart} />
    </nav>
  );
};
