import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { Link, Element } from "react-scroll";
import { ProductSpecification } from "./ProductSpecification";

const productMenuCarouselTheme: CustomFlowbiteTheme = {
  carousel: {
    control: { base: "hidden" },
  },
};

export function ProductMenu() {
  return (
    <div>
      <Flowbite theme={{ theme: productMenuCarouselTheme }}>
        <div className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[65dvw] hidden lg:block">
          <Carousel className="h-[28px] w-[60dvw]">
            <div
              onDragStart={(e) => {
                e.preventDefault();
              }}
              className="[&>a]:common-button-w-background-inverted [&>a]:p-2 [&>a]:mr-2 [&>a]:text-[16px] [&>a]:font-normal [&>a]:h-[48px] flex [&>a]:grow "
            >
              <Link offset={-100} spy={true} smooth={true} to="description">
                Opis
              </Link>
              <Link offset={-100} spy={true} smooth={true} to="specification">
                Specyfikacja
              </Link>
              <Link offset={-100} spy={true} smooth={true} to="opinions">
                Opinie(x)
              </Link>
              <Link
                offset={-100}
                spy={true}
                smooth={true}
                to="questionsandanswers"
              >
                Pytania i odpowiedzi (x)
              </Link>
              <Link
                offset={-100}
                spy={true}
                smooth={true}
                to="guarnateesandservice"
              >
                Gwarancje i usługi
              </Link>
              <Link offset={-100} spy={true} smooth={true} to="installment">
                Raty
              </Link>
              <Link offset={-100} spy={true} smooth={true} to="leasing">
                Leasing
              </Link>
            </div>
          </Carousel>
        </div>

        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="description"
        >
          Product description soon
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="specification"
        >
          <ProductSpecification />
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="opinions"
        >
          Opinions soon
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="questionsandanswers"
        >
          Questions and answers soon
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="guarnateesandservice"
        >
          Guarntes and services soon
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="installment"
        >
          Installment soon
        </Element>
        <Element
          className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw]"
          name="leasing"
        >
          Leasing soon
        </Element>
      </Flowbite>
    </div>
  );
}

// TODO: add sticky menu with price + to cart button for mobiles
