import React from "react";
import { useSelector } from "react-redux";
import { footerList } from "../../../../data/initDataForPage/footerList";
import { Link } from "react-router-dom";
import { ReactComponent as VkSocial } from "../../../../../assets/svg_icons/vk_social.svg";
import { ReactComponent as FaceboofSocial } from "../../../../../assets/svg_icons/facebook_social.svg";
import { ReactComponent as InstagramSocial } from "../../../../../assets/svg_icons/instagram_social.svg";
import style from "./footer.module.scss";
import ComponentContainer from "../../../common/componentContainer/componentContainer";
import { getProductLength } from "../../../../store/slices/product";
import { getCollectionCategory } from "../../../../store/slices/collectionCategory";
import { transformCollectionFooterData } from "../../../../utils/transformCollectionFooterData";

const Footer = () => {
  const productsLenght = useSelector(getProductLength());
  const collectionCaterogy = useSelector(getCollectionCategory());
  const footerListData = transformCollectionFooterData({
    footerList,
    productsLenght,
    collectionCaterogy,
  });

  return (
    <footer>
      <ComponentContainer name={"footer"}>
        <div className={style.footer__wrapper}>
          {footerListData.map((list, index) => (
            <ul key={index} className={style.footer__list}>
              <div className={style.footer__list_title}>{list.title}</div>

              {list.list.map((listItem, index) => (
                <li key={index} className={style.footer__list_link}>
                  <Link to={listItem.path ? listItem.path : "/"}>
                    {listItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul className={style.footer__list}>
            <div className={style.footer__list_title}>social</div>
            <li>Shoper is made with love in Warsaw</li>
            <li>2014 © All rights reserved. El Passion</li>
            <li>
              <div className={style.footer__list_social}>
                <div className={style.footer__list_social_icon_wrapper}>
                  <VkSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
                <div className={style.footer__list_social_icon_wrapper}>
                  <FaceboofSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
                <div className={style.footer__list_social_icon_wrapper}>
                  <InstagramSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ComponentContainer>
    </footer>
  );
};

export default Footer;
