import React, { useState, useEffect } from "react";
import style from "./review.module.scss";
import UserReviewer from "../userReviewer/userReviewer";
import { displayDate } from "../../../../utils/displayDate";
import Loading from "../../../common/loadingComponent/loading";
import userService from "../../../../services/user.service";
import Button from "../../../common/buttonComponent/button";
import { useSelector } from "react-redux";
import { getAuthUserId } from "../../../../store/slices/user";

const Review = ({
  _id: reviewId,
  userId,
  created_at: created,
  content,
  isLoggedIn,
  handleDeleteReview,
}) => {
  const [user, setUser] = useState();
  const authUserId = useSelector(getAuthUserId());

  useEffect(() => {
    userService.getUser(userId).then((data) => setUser(data.content));
  }, [userId]);

  return (
    <>
      {user ? (
        <div className={style.review}>
          <div className={style.review__wrapper}>
            <div className={style.review__user_reviewer}>
              <UserReviewer {...{ user }} />
            </div>

            <div className={style.review__content}>
              <div className={style.review__content_review}>
                <p>{content}</p>
              </div>
              <div className={style.review__content_date}>
                {displayDate(created)}
              </div>
            </div>
            {isLoggedIn && (
              <>
                {user._id === authUserId && (
                  <div className={style.review__delete}>
                    <Button
                      onAction={() => handleDeleteReview(reviewId)}
                      className={"button_table__delete"}></Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Review;
