import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { productsByCategory } from "../../graphql/queries";
import { Item } from "../../components/Item";
import { currency } from "../../state/currency";
import { useRecoilState } from "recoil";

interface Product {
  name: string;
  gallery: string[];
  inStock: boolean;
}

const Category: NextPage = () => {
  const router = useRouter();
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const categorySlug = router.query.category;
  const input = { input: { title: categorySlug } };
  const { loading, error, data } = useQuery(productsByCategory, {
    variables: input,
  });
  return (
    <div className={styles.container}>
      <h1>{router.query.category}</h1>
      {loading ? (
        <h2>Loading data...</h2>
      ) : data ? (
        data.category.products.map((product: Product) => (
          <Item
            imageLink={product.gallery[0]}
            itemName={product.name}
            price={"23"}
          ></Item>
        ))
      ) : (
        <h1>There are no products in this category.</h1>
      )}
    </div>
  );
};

export default Category;
