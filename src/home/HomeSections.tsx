import { SliderBox } from "../sliderBox";
import { SliderBoxInfo } from "../sliderBoxInfo";
import { PromotionCard } from "./PromotionCard";
import { homeSliderBoxInfoItems } from "./sliderBoxItems";

export function HomeSections() {
  return (
    <>
      <div className="items-stretch flex-row-reverse justify-between flex-wrap flex mt-[32px]">
        {/* home seciton row  */}
        <div className="w-full">
          {/* about company slider */}
          <SliderBoxInfo title="Odkryj morele" items={homeSliderBoxInfoItems} />
        </div>
        <div className="w-[400px] rounded-[8px] overflow-hidden">
          {/* home section promotions */}
          <PromotionCard />
        </div>
        <div className="w-[calc(100%-416px)] ">
          {/* home sections sliders */}
          <SliderBox
            title="Polecane"
            recomended={true}
            items={[{ name: "Iphone", price: 140, link: "xd", sold: 400 }]}
          />
          <SliderBox
            title="Forma na lata"
            linkCategory="cat"
            items={[{ name: "Iphone", price: 140, link: "xd", sold: 400 }]}
          />
        </div>
      </div>
    </>
  );
}
