import { Product } from "../interfaces";
import { CarouselProducts } from "../carouselProducts";

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
              <CarouselProducts items={items} recomended={recomended} />
              {}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
