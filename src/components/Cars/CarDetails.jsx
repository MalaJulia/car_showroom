import { getCarsById } from "../../services/serviceCar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewsForm from "../AddReviews/AddReviewsForm";
import Carousel from "../Carousel/Carousel";
import { Rating } from "@mui/material";

export default function CarDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCarsById(id).then(setCar);
  }, []);

  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });

  const filterReviews = reviews.filter((review) => review.id == id);

  const newReview = [...(car?.reviews || []), ...filterReviews];

  return (
    <>
      <div className="mainBlockDetails">
        <Carousel images={car?.images} />
        <div className="detailsContainer">
          <h2>{car?.title}</h2>
          <div className="price">
            <p>${car?.price}</p>
            {car.discountPercentage ? (
              <p>Знижка %{car?.discountPercentage}</p>
            ) : (
              <></>
            )}
          </div>
          <p>{car.description}</p>
          <div className="characteristicsAndPolicy">
            <div className="characteristicsConteiner">
              <h2>Характеристики:</h2>
              <p>
                Ширина - <span>{car?.dimensions?.width}</span>
              </p>
              <p>
                Висота - <span>{car?.dimensions?.height}</span>
              </p>
              <p>
                Глибина - <span>{car?.dimensions?.depth}</span>
              </p>
              <p>
                Вага - <span>{car?.weight}</span>
              </p>
            </div>
            <div className="policy">
              <p>
                Доставка - <span>{car?.shippingInformation}</span>
              </p>
              <p>
                Гарантія - <span>{car?.warrantyInformation}</span>{" "}
              </p>
              <p>
                Політика повернення - <span>{car?.returnPolicy}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title">Відгуки</h2>
      <div className="reviewBlock">
        <div className="formBlock">
          <AddReviewsForm id={id} />
        </div>
        <div className="review">
          {newReview.map((res, index) => (
            <div className="oneReview" key={index}>
              <div>
                <p className="name">{res.reviewerName}</p>
                <p>{res.comment}</p>
                <Rating readOnly size="small" value={res.rating} />
              </div>
              <p className="date">
                {" "}
                {new Date(res.date).toLocaleDateString("uk-UA")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
