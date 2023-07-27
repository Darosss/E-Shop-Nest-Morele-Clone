import React, { useState } from "react";
import { Carousel } from "flowbite-react";

//TODO: this from api call later
const mockedPromotions = [
  {
    imgBig: "assets/big_image_2959.png",
    imgIndicator: "assets/thumbnail_image_2959.png",
  },
  {
    imgBig: "assets/big_image_2953.png",
    imgIndicator: "assets/thumbnail_image_2953.png",
  },
  {
    imgBig: "assets/big_image_2960.png",
    imgIndicator: "assets/thumbnail_image_2960.png",
  },
  {
    imgBig: "assets/big_image_2961.png",
    imgIndicator: "assets/thumbnail_image_2961.png",
  },
  {
    imgBig: "assets/big_image_2953.png",
    imgIndicator: "assets/thumbnail_image_2953.png",
  },
  {
    imgBig: "assets/big_image_2960.png",
    imgIndicator: "assets/thumbnail_image_2960.png",
  },
  {
    imgBig: "assets/big_image_2961.png",
    imgIndicator: "assets/thumbnail_image_2961.png",
  },
];

export function HomeSlider() {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);

  return (
    <>
      <div className="min-w-[617px] pl-[260px]">
        {/* home promotion slider */}
        <div>
          {/* pomotion slider */}
          <div className="cursor-grab h-[586px]">
            {/* swiper container ps windows swiper container horizontal */}
            <div>
              <Carousel
                className="h-[465px] rounded-md"
                slideInterval={10000}
                onSlideChange={(slideIdx) => setActiveSlideIdx(slideIdx)}
                indicators={false}
              >
                {/* swipper-wrapper  */}
                {/* here will be links with dynamical width */}
                {mockedPromotions.map((promotion, idx) => (
                  <img
                    key={idx}
                    src={promotion.imgBig}
                    alt="promotion"
                    className="h-[458px] "
                  />
                ))}
              </Carousel>
              <div className="relative w-full cursor-grab flex [&>button]:flex-auto [&>button]:h-[120px] [&>button]:w-[263px] min-w-[263px]">
                {/* swiper-container ps-pagination swiper-container-horizontal swiper-container-free-mode */}
                {mockedPromotions.map((promotion, idx) => (
                  <button
                    key={idx}
                    className={`${
                      activeSlideIdx === idx ? "border-[2px] border-orange" : ""
                    }`}
                  >
                    <img src={promotion.imgIndicator} alt="promotion" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
