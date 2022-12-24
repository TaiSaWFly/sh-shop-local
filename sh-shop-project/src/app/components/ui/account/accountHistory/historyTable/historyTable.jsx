import React, { useEffect } from "react";
import BackButton from "../../../../common/buttonComponent/backButton";
import Table from "../../../../common/tableComponent/table/table";
import HistoryProducts from "../historyProducts/historyProducts";
import style from "./historyTable.module.scss";
import { parseDate } from "../../../../../utils/parseDate";
import Loading from "../../../../common/loadingComponent/loading";
import Price from "../../../../common/priceComponent/price";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingStatusHistory,
  getOrderHistory,
  loadOrderHistoryUser,
} from "../../../../../store/slices/user";

const HistoryTable = () => {
  const dispatch = useDispatch();
  const userHistory = useSelector(getOrderHistory());
  const isLoadingHistory = useSelector(getIsLoadingStatusHistory());

  useEffect(() => {
    dispatch(loadOrderHistoryUser());
    // eslint-disable-next-line
  }, []);

  const columns = {
    order: {
      name: "order №",
      component: (h) => <div>{h.order}</div>,
    },
    orderDate: {
      name: "order date",
      component: (h) => <div>{parseDate(h.orderDate)}</div>,
    },
    products: {
      name: "products",
      component: (h) => <HistoryProducts products={h.products} />,
    },
    status: {
      name: "status",
      component: (h) => <div>{h.status}</div>,
    },
    shipDate: {
      name: "ship date",
      component: (h) => (
        <div>{h.shipDate !== "" ? parseDate(h.shipDate) : "no SHIP DATE"}</div>
      ),
    },
    total: {
      name: "total amount",
      component: (h) => <Price price={h.total} />,
    },
  };

  return (
    <div>
      <BackButton
        className={style.history_table__back_button}
        urlBack="/account">
        go back
      </BackButton>
      {!isLoadingHistory ? (
        <>
          {userHistory && userHistory.length !== 0 ? (
            <div className={style.history_table}>
              <Table columns={columns} dataBody={userHistory} />
            </div>
          ) : (
            <>History Empty</>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HistoryTable;
