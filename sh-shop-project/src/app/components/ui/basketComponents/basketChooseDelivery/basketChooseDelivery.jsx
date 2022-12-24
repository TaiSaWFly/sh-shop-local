import React, { useEffect, useState } from "react";
import { transformDataForSelect } from "../../../../utils/transformDataForSelect";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import CourierForm from "../../forms/deliveryForms/courierForm/courierForm";
import CourierTransportCompanyForm from "../../forms/deliveryForms/courierTransportCompanyForm/courierTransportCompanyForm";
import RequestForReceivedOrder from "../../forms/deliveryForms/requestForReceivedOrder/requestForReceivedOrder";
import style from "./basketChooseDelivery.module.scss";

const RenderActiveForm = ({
  component: Component,
  optionId,
  currentOption,
}) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (currentOption) {
      setActive(optionId === currentOption.value ? true : false);
    } else {
      setActive(false);
    }
  }, [optionId, currentOption]);

  return <>{isActive && <Component />}</>;
};

const BasketChooseDelivery = ({ user, totalAmount }) => {
  const optionDeliveryMethods = [
    {
      _id: "1",
      name: "request for received your order",
      component: () => <RequestForReceivedOrder {...{ user }} />,
    },
    {
      _id: "2",
      name: "courier",
      component: () => <CourierForm />,
    },
    {
      _id: "3",
      name: "courier transport company",
      component: () => <CourierTransportCompanyForm />,
    },
  ];

  const [method, setMethod] = useState();
  const optionsMethods = transformDataForSelect(optionDeliveryMethods);

  const handleChangeMethod = (target) => {
    setMethod(target.value);
  };

  return (
    <div className={style.choose_delivery}>
      <div className={style.choose_delivery__title}>
        <TitleComponent
          title={method ? "shipping address" : "choose a delivery method"}
          subtitle={method ? "All fields are required" : ""}
        />

        <div className={style.choose_delivery_total}>
          <p>
            total: <span>&pound;{totalAmount}</span>
          </p>
        </div>
      </div>

      <div className={style.choose_delivery__conteiner}>
        <div className={style.choose_delivery__select}>
          <SelectField
            label="delivery method"
            name="method"
            options={optionsMethods}
            value={method}
            placeholder="choose method"
            onChange={handleChangeMethod}
          />
        </div>

        {optionDeliveryMethods.map((o) => (
          <RenderActiveForm
            key={o._id}
            optionId={o._id}
            component={o.component}
            currentOption={method}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketChooseDelivery;
