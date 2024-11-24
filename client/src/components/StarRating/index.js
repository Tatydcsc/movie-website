import { FaRegStar, FaStar } from "react-icons/fa6";

export default function StarRating({ rating }) {
  const numStars = Math.round(rating / 2);

  return (
    <div className="movie-rate">
      {[...Array(5)].map((_, i) =>
        i < numStars ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );
}
