import React from "react";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import MainTitle from "../../ui/main/mainTitle/homeTitle";
import PopularProducts from "../../ui/main/popularComponents/popularProducts/popularProducts";
import ShopsNewsLetter from "../../ui/main/shopsNewsletter/shopsNewsletter";

const MainPage = () => {
  return (
    <ComponentContainer>
      <MainTitle />
      <PopularProducts />
      <ShopsNewsLetter />
    </ComponentContainer>
  );
};

export default MainPage;
