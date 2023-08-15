import { Product } from "../interfaces";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

interface CarouselProductsProps {
  items: Product[];
  recomended?: boolean;
  mostBought?: boolean;
}

export function CarouselProducts({
  items,
  recomended = false,
  mostBought = false,
}: CarouselProductsProps) {
  return (
    <div className="w-full h-[350px]">
      <Carousel
        className="rounded-md [&>div>div]:w-[210px] select-none"
        slideInterval={10000}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          >
            <Link
              to={"url" + idx}
              className=" inline-block max-w-[168px] w-[168px] p-[0_8px_8px] mr-[42px] [&>div]:mt-[4px]"
            >
              {mostBought ? (
                <div className="flex border border-orange rounded-full items-center [&>div]:text-[12px]">
                  <div className="rounded-full m-[2px] mr-2 bg-orange w-[20px]  flex justify-center">
                    {idx + 1}
                  </div>
                  <div>Kupiono: {item.sold} sztuk</div>
                </div>
              ) : null}
              <div>
                <img src="/assets/12775308_0_i256.jpg" />
              </div>
              <div className="mb-[12px] mt-[10px] min-h-[20px]">
                {/* ps price box */}
              </div>
              <div className="font-semibold">{item.price} zł</div>
              <div className="text-[14px]">{item.name}</div>
              <div> * * * * *</div>
              {recomended ? (
                <div className="text-[12px]"> Kupily {item.sold} osob </div>
              ) : null}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
