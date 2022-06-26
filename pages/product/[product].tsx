import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { currency } from "../../state/currency";
import { getProductById } from "../../graphql/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Product } from "../../types/Product";
import { Price } from "../../types/Price";
import productStyles from "../../styles/product.module.css";
const ProductPage: NextPage = () => {
  const [chosenCurrency, setChosenCurrency] = useRecoilState(currency);
  const router = useRouter();
  const productId = router.query.product;
  const { loading, error, data } = useQuery(getProductById, {
    variables: { productId },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={productStyles.grid}>
      {data ? (
        <div className={productStyles.productGallery}>
          <div>
            {data?.product?.gallery ? (
              data.product.gallery.map((image: string) => (
                <img src={image} className={productStyles.showcaseImage} />
              ))
            ) : (
              <></>
            )}
          </div>
          <img
            src={data.product.gallery[0]}
            alt=""
            className={productStyles.mainImage}
          />
        </div>
      ) : (
        <h1>loading image</h1>
      )}
      {data ? (
        <div>
          <h1>{data.product.brand}</h1>
          <h2>{data.product.name}</h2>
          {data.product.attributes ? (
            <div>
              {data.product.attributes.map((attribute: any) => {
                const prices = data.product.prices.filter(
                  (price: Price) => price.currency.symbol === chosenCurrency
                );
                const price = prices[0].amount + prices[0].currency.symbol;
                return (
                  <div>
                    <h2>{attribute.name}</h2>
                    {attribute.items.map((item: any) => (
                      <button>{item.displayValue}</button>
                    ))}
                    <h2>Price:</h2>
                    <h3>{price}</h3>
                    <button>Add To Cart</button>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.product.description,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <h1>Loading your data</h1>
      )}
    </div>
  );
};

export default ProductPage;
