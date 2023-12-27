import React from 'react';
import { review } from '../Data';
import quoteImg from "../assets/images/quote.png"


const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        Customer's <span>Review</span>
      </h1>
      <div className="box-container">
        {review.map((item, index) => (
          <div className="box" key={index}>
            <img src={quoteImg} alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
              vel non? Minima cumque atque, assumenda eligendi nisi delectus
              saepe ducimus commodi molestiae sint repellat porro, nam voluptas
              odio quam laborum.
            </p>

            <img src={item.img} alt="" className="user" />
            <h3>joe doe</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review