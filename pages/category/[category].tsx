import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { currency } from "../../state/currency";
import { useRecoilState } from "recoil";

const Category: NextPage = () => {
  const router = useRouter();
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  return (
    <div className={styles.container}>
      <h1>{router.query.category}</h1>
    </div>
  );
};

export default Category;
