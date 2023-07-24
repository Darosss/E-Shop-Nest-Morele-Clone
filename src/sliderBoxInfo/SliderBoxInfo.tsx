interface ItemImages {
  name: string;
  nameDesc: string;
  description: string;
  imgSrc: string;
}

export function SliderBoxInfo({
  title,
  items,
}: {
  title: string;
  items: ItemImages[];
}) {
  return (
    <>
      <div className="w-full bg-body rounded-xl">
        <div className="mb-[24px] relative">
          {/* head */}
          <h2 className="m-[8px_16px] inline-block	text-[18px] font-semibold">
            {title}
          </h2>
        </div>
        <div className="min-h-[265px]">
          {/* content */}
          <div className="swipper-container">
            <div className="h-100 flex relative flex">
              {/* swipper wrapper here arrow etc */}
              {items.map((item, idx) => (
                <div key={idx} className="min-h-[200px] relative w-[215px]">
                  <div className="flex">
                    <img
                      loading="eager"
                      src={item.imgSrc}
                      alt="slider-price-icon"
                      className="mx-auto h-[90px] m-[30px_0] w-[90px] "
                    />
                  </div>
                  <div className="text-[12px] text-center">
                    <span className="font-semibold">{item.name}</span>
                    <br />
                    <span>{item.nameDesc}</span>
                  </div>
                  {/* //TODO: add show desc on hover*/}
                  <div className=" flex flex-wrap">
                    <p className="hidden px-3 text-center bg-content">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
