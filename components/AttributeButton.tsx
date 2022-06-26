import React from "react";
import styles from "../styles/attribute.module.css";
interface AttributeProps {
  option: string;
}
export const AttributeButton = ({ option }: AttributeProps) => {
  return <button className={styles.attribute}>{option}</button>;
};
