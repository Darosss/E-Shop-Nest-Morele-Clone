import { useState } from "react";
import Heart from "react-animated-heart";

interface FavouriteButtonProps {
  productId: number;
}

export function FavouriteButton({ productId }: FavouriteButtonProps) {
  const [isFavourite, setFavourite] = useState(false);

  function hanldeClickHeartFavourite(productId: number) {
    if (isFavourite) setFavourite(false);
    else setFavourite(true);
    console.log(productId);
    //TODO: make a add to favourites when logged in
  }

  return (
    <Heart
      isClick={isFavourite}
      onClick={() => hanldeClickHeartFavourite(productId)}
    />
  );
}
