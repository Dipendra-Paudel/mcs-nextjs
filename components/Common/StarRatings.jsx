const StarRatings = ({ rating }) => {
  !(rating <= 5 && rating >= 0) && (rating = 0);
  const fullRatings = Math.floor(rating);
  const halfRatings = rating - fullRatings;
  const remainingStars = 5 - Math.ceil(rating);

  return (
    <div className="text-red-400 flex space-x-2">
      {[...Array(fullRatings)].map((r, i) => (
        <img
          src="/icons/stars/full-star.png"
          alt="Full Star"
          className="w-4 h-4"
          key={i}
        />
      ))}

      {halfRatings > 0 ? (
        <img
          src="/icons/stars/half-star.png"
          className="w-4 h-4"
          alt="Half Star"
        />
      ) : (
        ""
      )}

      {[...Array(remainingStars)].map((r, i) => (
        <img
          src="/icons/stars/empty-star.png"
          className="w-4 h-4"
          alt="Empty Star"
          key={i}
        />
      ))}
    </div>
  );
};

export default StarRatings;
