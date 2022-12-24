import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ComponentContainer from "../common/componentContainer/componentContainer";
import AllProductsPage from "../page/allProductsPage/allProductsPage";
import CollectionPage from "../page/collectionPage/collectionPage";

const CollectionLayout = () => {
  return (
    <ComponentContainer>
      <Switch>
        <Route
          exact
          path="/collection/:collection?"
          component={CollectionPage}
        />

        <Route
          path="/collection/:collection?/:category?/products"
          component={AllProductsPage}
        />

        <Redirect to="/" from="*" />
      </Switch>
    </ComponentContainer>
  );
};

export default CollectionLayout;
