import React from "react";
import styles from "./Input.module.css";

const Select = (props) => {
  return (
    <select
      className={`${styles.input} ${
        props.isValid === false ? styles.invalid : ""
      }`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
    >
      <option value="" disabled selected>
        What's your language?
      </option>
      <option value="Javascript">Javascript</option>
      <option value="Python">Python</option>
      <option value="C++">C++</option>
      <option value="Java">Java</option>
      <option value="C">C</option>
      <option value="C#">C#</option>
      <option value="Ruby">Ruby</option>
      <option value="PHP">PHP</option>
      <option value="Swift">Swift</option>
      <option value="None">Don't have one yet</option>
    </select>
  );
};

export default Select;
