import { Product } from "../interfaces";

export function SliderBox({
  title,
  linkCategory,
  items,
  recomended = false,
}: {
  title: string;
  items: Product[];
  linkCategory?: string;
  recomended?: boolean;
}) {
  return (
    <>
      <div className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl">
        <div className="mb-[24px] relative">
          {/* head */}
          <h2 className="inline-block	text-[18px] font-semibold">{title}</h2>
          {!recomended && linkCategory ? (
            <a href={linkCategory}> ZOBACZ WIĘCEJ - </a>
          ) : null}
        </div>
        <div className="min-h-[265px]">
          {/* content */}
          <div className="swipper-container">
            <div className="h-100 flex relative">
              {/* swipper wrapper here arrow etc */}
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={"item-link"}
                  className="w-[168px] p-[0_8px_8px] mr-[42px] [&>div]:mt-[4px]"
                >
                  <div>
                    <img src="assets/12775308_0_i256.jpg" />{" "}
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
