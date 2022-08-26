import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles.input} ${
        props.isValid === false || props.accCorrect === false
          ? styles.invalid
          : ""
      }`}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default Input;
