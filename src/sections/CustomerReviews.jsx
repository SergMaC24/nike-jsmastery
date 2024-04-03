import React from "react";
import {reviews} from '../constants/index'
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customer </span>
        Say?
      </h3>
      <p className="text-info text-center m-auto mt-4 max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis
        odio dolore.
      </p>
      <div
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col
      gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
