import React, { useState } from "react";
import Button from "../../../common/buttonComponent/button";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TextAreaField from "../../../common/fieldCommonents/textAreaField/textAreaField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import style from "./contactForm.module.scss";

const ContactForm = () => {
  const topicOption = [
    {
      value: 1,
      label: "lorem ipsum 1",
    },
    {
      value: 2,
      label: "lorem ipsum 2",
    },
    {
      value: 3,
      label: "lorem ipsum 3",
    },
  ];

  const [data, setData] = useState({
    name: "",
    email: "",
    content: "",
    topic: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={style.contact_form}>
      <div className={style.contact_form__conteiner}>
        <form onSubmit={handleSubmit}>
          <div className={style.contact_form__field}>
            <SelectField
              label="topic"
              name="topic"
              options={topicOption}
              value={data.topic}
              type="form"
              placeholder="lorem ipsum"
              onChange={handleChange}
            />
          </div>

          <div className={style.contact_form__field_collective}>
            <div className={style.contact_form__field}>
              <TextField
                label="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className={style.contact_form__field}>
              <TextField
                label="e-mail"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={style.contact_form__field}>
            <TextAreaField
              label="message"
              name="content"
              value={data.content}
              onChange={handleChange}
            />
          </div>

          <Button>send</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
