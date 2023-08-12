import { useState } from "react";

interface StarRatingProps {
  reviewRating: number;
  reviewCount: number;
  editable?: boolean;
}

export function StarRating({
  reviewRating,
  reviewCount,
  editable = false,
}: StarRatingProps) {
  const [rating, setRating] = useState(reviewRating);
  const [hover, setHover] = useState(0);
  return (
    <div className="text-[20px]">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            key={index}
            style={{ color: index <= (hover || rating) ? "red" : "gray" }}
            onClick={() => {
              if (editable) setRating(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span> &#9733;</span>
          </button>
        );
      })}
      <span className="text-[14px] text-orange"> ({reviewCount})</span>
    </div>
  );
}
