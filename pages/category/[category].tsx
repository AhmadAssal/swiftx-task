import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import categoryStyles from "../../styles/category.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { productsByCategory } from "../../graphql/queries";
import { Item } from "../../components/Item";
import { currency } from "../../state/currency";
import { useRecoilState } from "recoil";
import { Product } from "../../types/Product";
import { Price } from "../../types/Price";
const Category: NextPage = () => {
  const router = useRouter();
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const categorySlug = router.query.category;
  const input = {
    input: {
      title: categorySlug,
    },
  };
  const { loading, error, data } = useQuery(productsByCategory, {
    variables: input,
  });

  return (
    <div className={styles.container}>
      <h1>{router.query.category}</h1>
      <div className={categoryStyles.grid}>
        {loading ? (
          <h2>Loading data...</h2>
        ) : data ? (
          data.category.products.map((product: Product) => {
            const prices = product.prices.filter(
              (price: Price) => price.currency.symbol === chosenCurrency
            );
            const price = prices[0].amount + prices[0].currency.symbol;
            return (
              <Item
                key={product.name}
                id={product.id}
                imageLink={product.gallery[0]}
                itemName={product.name}
                price={price}
              ></Item>
            );
          })
        ) : (
          <h1>There are no products in this category.</h1>
        )}
      </div>
    </div>
  );
};

export default Category;
