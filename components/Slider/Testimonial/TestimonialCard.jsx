import StarRatings from "../../Common/StarRatings";

const TestimonialCard = ({ image, customerName, review, rating }) => {
  return (
    <div className="text-xs md:text-sm tracking-wide md:tracking-normal border py-4 px-2 space-y-1 md:space-y-2">
      <div className="inline-block h-20 w-20 mx-auto rounded-full overflow-hidden">
        <img src={image} alt={customerName} className="h-full" />
      </div>
      <div className="text-gray-600">
        {`"`}
        {review}
        {`"`}
      </div>
      <div>
        <div className="pt-1 font-medium text-gray-700">{customerName}</div>
        <div className="flex justify-center">
          <StarRatings rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
