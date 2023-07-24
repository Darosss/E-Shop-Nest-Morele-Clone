export function HomeSlider() {
  return (
    <>
      <div className="min-w-[617px] pl-[276px]">
        {/* home promotion slider */}
        <div>
          {/* pomotion slider */}
          <div className="cursor-grab">
            {/* swiper container ps windows swiper container horizontal */}
            <div className="[&>a]:h-[458px] flex [&>a]:rounded-md">
              {/* swipper-wrapper  */}
              {/* here will be links with dynamical width */}
              <a
                href="link"
                style={{
                  backgroundImage: `url("assets/big_image_2927.png")`,
                  width: "100vw",
                }}
              ></a>
            </div>
          </div>
          <div className="cursor-grab flex">
            {/* swiper-container ps-pagination swiper-container-horizontal swiper-container-free-mode */}
            <div
              className="h-[128px] w-[263px]"
              style={{
                backgroundImage: `url("assets/thumbnail_image_2944.png")`,
              }}
            ></div>
            <div
              className="h-[128px] w-[263px]"
              style={{
                backgroundImage: `url("assets/thumbnail_image_2944.png")`,
              }}
            ></div>
            <div
              className="h-[128px] w-[263px]"
              style={{
                backgroundImage: `url("assets/thumbnail_image_2944.png")`,
              }}
            ></div>
            <div
              className="h-[128px] w-[263px]"
              style={{
                backgroundImage: `url("assets/thumbnail_image_2944.png")`,
              }}
            ></div>
            <div
              className="h-[128px] w-[263px]"
              style={{
                backgroundImage: `url("assets/thumbnail_image_2944.png")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
