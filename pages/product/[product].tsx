import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { currency } from "../../state/currency";
import { cart } from "../../state/cart";
import { getProductById } from "../../graphql/queries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { Price } from "../../types/Price";
import productStyles from "../../styles/product.module.css";
import { AttributeButton } from "../../components/AttributeButton";
import { CartButton } from "../../components/CartButton";
import { Attribute } from "../../types/Attribute";
import { Item } from "../../types/Item";
const ProductPage: NextPage = () => {
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const [globalCart, setGlobalCart] = useRecoilState<any>(cart);
  const [chosenAttribute, setChosenAttribute] = useState({});
  // console.log(globalCart);
  // useEffect(() => {
  //   setGlobalCart({ ...globalCart, anotherAttribute: "anothervalue" });
  // }, []);
  // console.log(chosenAttribute);
  const router = useRouter();
  const productId = router.query.product;
  const { loading, error, data } = useQuery(getProductById, {
    variables: { productId },
  });
  const [chosenImage, setChosenImage] = useState("");

  useEffect(() => {
    console.log(data);
    setChosenImage(data?.product.gallery[0]);
  }, [data]);

  const prices = data?.product.prices.filter(
    (price: Price) => price.currency.symbol === chosenCurrency
  );

  return (
    <div className={productStyles.grid}>
      {data ? (
        <div className={productStyles.productGallery}>
          <div className={productStyles.showcaseGallery}>
            {data?.product?.gallery ? (
              data.product.gallery.map((image: string) => (
                <img
                  src={image}
                  className={productStyles.showcaseImage}
                  onClick={() => setChosenImage(image)}
                />
              ))
            ) : (
              <></>
            )}
          </div>
          <img src={chosenImage} alt="" className={productStyles.mainImage} />
        </div>
      ) : (
        <h1>loading image</h1>
      )}
      {data ? (
        <div>
          <h1 className={productStyles.margin3}>{data.product.brand}</h1>
          <h2 className={productStyles.margin3}>{data.product.name}</h2>
          {data.product.attributes ? (
            <div>
              {data.product.attributes.map((attribute: Attribute) => {
                return (
                  <div>
                    <h2>{attribute.name}</h2>
                    {attribute.items.map((item: Item) => (
                      <AttributeButton
                        option={item.displayValue}
                        onClick={() => {
                          const name = attribute.name;
                          const value = item.value;
                          setChosenAttribute({
                            ...chosenAttribute,
                            [name]: value,
                          });
                        }}
                      ></AttributeButton>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          <h2>Price:</h2>
          <h3 className={productStyles.margin3}>
            {prices[0].amount + prices[0].currency.symbol}
          </h3>
          <CartButton
            onclick={() => {
              const product = {
                id: productId,
                brand: data.product.brand,
                name: data.product.name,
                price: prices[0].amount + prices[0].currency.symbol,
                attributes: chosenAttribute,
              };
              setGlobalCart([...globalCart, product]);
              if (typeof window !== "undefined") {
                alert(data.product.name + " added to cart.");
              }
            }}
          ></CartButton>
          <div
            dangerouslySetInnerHTML={{
              __html: data.product.description,
            }}
          ></div>
        </div>
      ) : (
        <h1>Loading your data</h1>
      )}
    </div>
  );
};

export default ProductPage;
