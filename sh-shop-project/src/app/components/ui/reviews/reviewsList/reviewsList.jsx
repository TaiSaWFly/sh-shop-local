import React from "react";
import style from "./reviewsList.module.scss";
import Review from "../review/review";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../../store/slices/review";

const ReviewsList = ({ reviews, isAdd, isLoggedIn }) => {
  const dispatch = useDispatch();

  const handleDeleteReview = (reviewId) => {
    dispatch(deleteReview(reviewId));
  };

  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map((r) => (
          <Review key={r._id} {...{ ...r, isLoggedIn, handleDeleteReview }} />
        ))
      ) : (
        <>
          {!isAdd && (
            <div className={style.empty_reviews_list}>
              <p>There is no review for this product right now...</p>
              {isLoggedIn ? (
                <span>Do you want to add first review?</span>
              ) : (
                <span>
                  If you want to add review? You must{" "}
                  <Link
                    className={style.empty_reviews_list__link}
                    to="/auth/signup">
                    Rerister Account
                  </Link>{" "}
                  !
                </span>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ReviewsList;
