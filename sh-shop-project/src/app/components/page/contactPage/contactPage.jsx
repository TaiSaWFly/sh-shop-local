import React from "react";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import TitleComponent from "../../common/titleComponent/titleComponent";
import ContactForm from "../../ui/forms/contactForm/contactForm";
import style from "./contactPage.module.scss";

const ContactPage = () => {
  return (
    <ComponentContainer>
      <div className={style.contact_page__title}>
        <TitleComponent
          title="contact"
          subtitle="Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a pellentesque."
        />
      </div>

      <ContactForm />
    </ComponentContainer>
  );
};

export default ContactPage;
