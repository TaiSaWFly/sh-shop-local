import React, { useState } from "react";
import style from "./shopsNewsletter.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import Button from "../../../common/buttonComponent/button";

const emptyField = { email: "" };

const ShopsNewsLetter = () => {
  const [data, setData] = useState(emptyField);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(emptyField);
  };

  return (
    <div className={style.news_letter}>
      <div className={style.news_letter__titlle_wpapper}>
        <TitleComponent
          title={"sign up to receive our updates"}
          subtitle={
            "Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat."
          }
        />
      </div>

      <div className={style.news_letter__form_wrapper}>
        <form className={style.news_letter__form} onSubmit={handleSubmit}>
          <input
            className={style.news_letter__form_input}
            value={data.email}
            name="email"
            type="text"
            placeholder="Your e-mail"
            onChange={handleChange}
          />
          <Button className={style.news_letter__form_button}>add</Button>
        </form>
      </div>
    </div>
  );
};

export default ShopsNewsLetter;
