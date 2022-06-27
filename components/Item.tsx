import React from "react";
import styles from "../styles/Item.module.css";
import Link from "next/link";

interface ItemProps {
  id: string;
  imageLink: string;
  itemName: string;
  price: string;
}

export const Item = ({ imageLink, itemName, price, id }: ItemProps) => {
  return (
    <Link href={"/product/" + id}>
      <div className={styles.item}>
        <img className={styles.image} src={imageLink} />
        <img
          src="/cart_icon.png"
          className={styles.cartIcon}
          onClick={() => {}}
        />
        <div className={styles.cardInfo}>
          <h3 className={styles.itemTitle}>{itemName}</h3>
          <b>
            <p className={styles.itemPrice}>{price}</p>
          </b>
        </div>
      </div>
    </Link>
  );
};
