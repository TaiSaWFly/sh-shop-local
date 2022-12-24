import React, { useState } from "react";
import Button from "../../../common/buttonComponent/button";
import TextAreaField from "../../../common/fieldCommonents/textAreaField/textAreaField";
import style from "./addReviewForm.module.scss";

const AddReviewForm = ({ onSubmit, user }) => {
  const [data, setData] = useState({
    content: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...data, userId: user._id });
  };

  return (
    <div className={style.review_form}>
      <form onSubmit={handleSubmit}>
        <TextAreaField
          label="write a review"
          name="content"
          value={data.content}
          onChange={handleChange}
        />

        <Button>add review</Button>
      </form>
    </div>
  );
};

export default AddReviewForm;
