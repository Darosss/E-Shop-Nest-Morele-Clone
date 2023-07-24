import { SliderBox } from "../sliderBox";
import { HomeAboutInfo } from "./HomeAboutInfo";
import { HomeSections } from "./HomeSections";
import { HomeSlider } from "./HomeSlider";

export function Home() {
  return (
    <>
      <div>
        <div>
          {/* get app android etc */}
          <HomeSlider />
          <div className="m-[32px_0_0]">
            {/* home sections */}
            <HomeSections />

            <div>
              {/* slider box  newsy akutalnosci
               */}
              <SliderBox
                title="Czas na PJ"
                linkCategory="xd"
                items={[{ name: "Iphone", price: 140, link: "xd", sold: 400 }]}
              />
            </div>
          </div>
          <HomeAboutInfo />
        </div>
      </div>
    </>
  );
}
