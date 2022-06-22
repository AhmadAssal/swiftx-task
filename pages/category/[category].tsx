import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
const Category: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>{router.query.category}</h1>
    </div>
  );
};

export default Category;
