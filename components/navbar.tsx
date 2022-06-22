import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import { navBar } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import utils from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
interface category {
  name: string;
}

interface Currency {
  label: string;
  symbol: string;
}

export const Navbar = () => {
  const { loading, error, data } = useQuery(navBar);
  const [chosenCurrency, setChosenCurrency] = useState<string>("$");
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <nav className={styles.navbar}>
      {data?.categories?.map((item: category) => (
        <Link href={"/category/" + item.name}>
          <a className={styles.navbarItem}>{item.name}</a>
        </Link>
      ))}
      <img src="/logo.png" alt="" className={styles.logo} />
      <div className={utils.dropdown}>
        <p className={utils.symbol}>{chosenCurrency}</p>
        <div className={utils.dropdownContent}>
          {data?.currencies?.map((currency: Currency) => (
            <div
              className={utils.currencyDiv}
              onClick={() => setChosenCurrency(currency.symbol)}
            >
              <p className={utils.currency}>{currency.label}</p>
              <p className={utils.currency}>{currency.symbol}</p>
            </div>
          ))}
        </div>
      </div>
      <Image src="/cart.png" width={20} height={20} className={styles.cart} />
    </nav>
  );
};
