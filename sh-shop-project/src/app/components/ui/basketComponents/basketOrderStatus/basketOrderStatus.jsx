import React from "react";
import style from "./basketOrderStatus.module.scss";
import { ReactComponent as CheckMark } from "../../../../../../node_modules/bootstrap-icons/icons/check-circle-fill.svg";
import { ReactComponent as FaliedMark } from "../../../../../../node_modules/bootstrap-icons/icons/plus-circle-fill.svg";
import { Link } from "react-router-dom";

const BasketOrderStatus = ({ orderStatus }) => {
  return (
    <div className={style.basket_order_status}>
      {orderStatus ? (
        <div>
          <div>
            <CheckMark
              className={style.basket_order_status__check_mark}
              width="150px"
              height="150px"
            />
          </div>

          <p className={style.basket_order_status__text}>
            Order completed successfully
          </p>

          <div className={style.basket_order_status__continue}>
            Do you want <Link to="/">Continue Shopping</Link> ?
          </div>
        </div>
      ) : (
        <div>
          <div>
            <FaliedMark
              className={style.basket_order_status__falied_mark}
              width="150px"
              height="150px"
            />
          </div>

          <p className={style.basket_order_status__text}>
            An error occurred while placing an order Try later
          </p>
        </div>
      )}
    </div>
  );
};

export default BasketOrderStatus;
