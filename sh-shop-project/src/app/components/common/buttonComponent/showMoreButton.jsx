import React from "react";
import Button from "./button";
import style from "./button.module.scss";

const ShowMoreButton = ({ handleMoreProduct }) => {
  return (
    <div className={style.show_more_button}>
      <Button onAction={handleMoreProduct}>show more</Button>
    </div>
  );
};

export default ShowMoreButton;
