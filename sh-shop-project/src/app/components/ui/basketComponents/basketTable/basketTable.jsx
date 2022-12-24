import React from "react";
import style from "./basketTable.module.scss";
import Table from "../../../common/tableComponent/table/table";
import BasketProductImage from "../basketProductImage/backetProductImage";
import BasketDecription from "../basketDecription/basketDecription";
import BasketColor from "../basketColor/basketColor";
import BasketQuantity from "../basketQuantity/basketQuantity";
import Button from "../../../common/buttonComponent/button";
import Price from "../../../common/priceComponent/price";
import BasketSize from "../basketSize/basketSize";
import { useDispatch } from "react-redux";
import {
  decrementBasketElement,
  deleteProductFromBasket,
  incrementBasketElement,
} from "../../../../store/slices/basket";

const BasketTable = ({ basketData, totalAmount }) => {
  const dispatch = useDispatch();

  const handleDeleteProductFromBasket = (id) => {
    dispatch(deleteProductFromBasket(id));
  };

  const handleDecrementBasketElement = (id) => {
    dispatch(decrementBasketElement(id));
  };

  const handleIncrementBasketElement = (id) => {
    dispatch(incrementBasketElement(id));
  };

  const columns = {
    product: {
      name: "product",
      component: (b) => (
        <BasketProductImage id={b.productId} imgUrl={b.imgUrl} />
      ),
    },
    decription: {
      name: "decription",
      component: (b) => (
        <BasketDecription
          id={b.productId}
          name={b.name}
          article={b.articleNumber}
        />
      ),
    },
    color: {
      name: "color",
      component: (b) => <BasketColor colors={b.colors} />,
    },
    size: {
      name: "size",
      component: (b) => <BasketSize sizes={b.sizes} />,
    },
    quantity: {
      name: "qty",
      component: (b) => (
        <BasketQuantity
          id={b._id}
          quantity={b.quantity}
          {...{ handleDecrementBasketElement, handleIncrementBasketElement }}
        />
      ),
      footer: {
        name: "subtotal:",
      },
    },
    amount: {
      name: "amount",
      component: (b) => <Price price={b.amount} />,
      footer: {
        component: (data) => <Price price={data} />,
      },
    },
    delete: {
      name: "",
      component: (b) => (
        <Button
          onAction={() => handleDeleteProductFromBasket(b._id)}
          className={"button_table__delete"}></Button>
      ),
    },
  };

  return (
    <div className={style.basket_table}>
      <Table columns={columns} dataBody={basketData} dataFooter={totalAmount} />
    </div>
  );
};

export default BasketTable;
