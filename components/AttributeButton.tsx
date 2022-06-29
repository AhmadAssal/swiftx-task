import React from "react";
import styles from "../styles/attribute.module.css";
interface AttributeProps {
  option: string;
  onClick: () => void;
}
export const AttributeButton = ({ onClick, option }: AttributeProps) => {
  return (
    <button className={styles.attribute} onClick={onClick}>
      {option}
    </button>
  );
};
