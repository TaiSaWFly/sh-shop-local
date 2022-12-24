import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import BasketTable from "../../ui/basketComponents/basketTable/basketTable";
import style from "./basketPage.module.scss";
import NextActionDecor from "../../common/nextActionDecor/nextActionDecor";
import TitleComponent from "../../common/titleComponent/titleComponent";
import Button from "../../common/buttonComponent/button";
import BasketChooseDelivery from "../../ui/basketComponents/basketChooseDelivery/basketChooseDelivery";
import { useDispatch, useSelector } from "react-redux";
import {
  clearOrderStatus,
  getBasketData,
  getLoadingOrderStatus,
  getOrderStatus,
  getSubtotalBasketAmount,
} from "../../../store/slices/basket";
import { getIsLoggedInStatus, getUser } from "../../../store/slices/user";
import BasketOrderStatus from "../../ui/basketComponents/basketOrderStatus/basketOrderStatus";
import Loading from "../../common/loadingComponent/loading";
import RenderCollectionLinks from "../../ui/collectionComponents/renderCollectionLinks/renderCollectionLinks";

const BasketPage = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedInStatus());
  const user = useSelector(getUser());

  const basketData = useSelector(getBasketData());
  const totalAmount = useSelector(getSubtotalBasketAmount());
  const isLoadingOrderStatus = useSelector(getLoadingOrderStatus());
  const orderStatus = useSelector(getOrderStatus());

  const [proceed, setProceed] = useState(false);

  const toggleProceed = () => {
    setProceed((pverState) => !pverState);
  };

  useEffect(() => {
    dispatch(clearOrderStatus());
    // eslint-disable-next-line
  }, []);

  return (
    <ComponentContainer>
      {isLoadingOrderStatus !== null ? (
        <>
          {!isLoadingOrderStatus ? (
            <BasketOrderStatus {...{ orderStatus }} />
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <>
          <div className={style.basket_page__wrapper}>
            <TitleComponent
              title={
                basketData && basketData.length !== 0
                  ? "Your shopping bag"
                  : "Your shopping bag is empty"
              }
              subtitle={
                basketData &&
                basketData.length !== 0 &&
                "Items reserved for limited time only"
              }
            />
          </div>
          <div className={style.basket_wrapper}>
            <div className={style.basket_container}>
              {basketData && basketData.length !== 0 ? (
                <>
                  <BasketTable {...{ basketData, totalAmount }} />
                  <div className={style.basket_table__action}>
                    <Link to="/">Continue Shopping</Link>
                    <Button
                      onAction={toggleProceed}
                      className={"button_table__order"}>
                      {!proceed ? "order now" : "do not order"}
                    </Button>
                  </div>

                  {proceed ? (
                    <>
                      <NextActionDecor />
                      <BasketChooseDelivery
                        user={isLoggedIn ? user : null}
                        {...{ totalAmount }}
                      />
                    </>
                  ) : null}
                </>
              ) : (
                <RenderCollectionLinks />
              )}
            </div>
          </div>
        </>
      )}
    </ComponentContainer>
  );
};

export default BasketPage;
