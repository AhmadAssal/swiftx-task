import React from "react";
import styles from "../styles/attribute.module.css";
interface AttributeProps {
  option: string;
  onClick: () => void;
  className: string;
}
export const AttributeButton = ({
  onClick,
  option,
  className,
}: AttributeProps) => {
  return (
    <button className={`${styles.attribute} ${className}`} onClick={onClick}>
      {option}
    </button>
  );
};
