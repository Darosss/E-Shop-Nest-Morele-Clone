interface ItemImages {
  name: string;
  nameDesc: string;
  description: string;
  imgSrc: string;
}
//TODO: add don't show this anymore(add to localstorage if should be showed?)

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
        <div className="mb-[8px] relative">
          {/* head */}
          <h2 className="m-[8px_16px] inline-block	text-[18px] font-semibold">
            {title}
          </h2>
        </div>
        <div className="min-h-[225px] p-3">
          {/* content */}
          <div className="swipper-container">
            <div className="h-100 relative flex justify-between">
              {/* swipper wrapper here arrow etc */}
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="group min-h-[200px] relative w-[215px] "
                >
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
                  <div className="flex flex-col justify-between group-hover:flex hidden rounded-md text-[12px] p-3 text-center bg-content absolute top-0 bottom-0 left-1">
                    <p>{item.description}</p>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="bg-orange p-3 rounded-md text-white text-[14px] font-semibold"
                      >
                        Sprawdź
                      </a>
                    ) : null}
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
