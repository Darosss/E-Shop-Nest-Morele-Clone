import { Link } from "react-router-dom";
import { MenuImages, MenuRoutes } from "../menu.enum";
import { ReactPortal } from "../../helpers/ReactPortal.helpers";
import { useContext } from "react";
import { MobilleMenuContext } from "./mobileMenuContext";
import { MobileCategoriesMenu } from "./MobileCategoriesMenu";

export function MobileMenu() {
  const { changeShowCategoriesMenu, showCategoriesMenu } =
    useContext(MobilleMenuContext);

  console.log(showCategoriesMenu);
  return (
    <ReactPortal wrapperId="root">
      <div className="fixed left-0 right-0  bottom-0 lg:hidden z-[99] ">
        <div className="bg-body left-0 right-0 top-0 bottom-[60px]">
          {showCategoriesMenu ? <MobileCategoriesMenu /> : null}
        </div>
        <div className="bg-body min-w-[300px] max-h-[60px] min-h-[60px] flex items-center shadow-default absolute bottom-0 left-0 right-0">
          <div className="h-full text-[12px] flex justify-between  flex-1 [&>*>img]:w-[12%] [&>*]:flex-col [&>*]:flex [&>*]:items-center [&>*]:text-center ">
            <Link to="/" onClick={() => changeShowCategoriesMenu(false)}>
              <img src={MenuImages.HOME} />
              Start
            </Link>

            <button
              onClick={() => changeShowCategoriesMenu(!showCategoriesMenu)}
            >
              <img src={MenuImages.LOUPE} />
              Menu
            </button>
            <Link
              to={MenuRoutes.CART}
              onClick={() => changeShowCategoriesMenu(false)}
            >
              <img src={MenuImages.CART} />
              Koszyk
            </Link>
            <Link to={MenuRoutes.LOGIN}>
              <img src={MenuImages.LOGIN} />
              Konto
            </Link>
            <button onClick={() => console.log("TODO: soon menu")}>
              <img src={MenuImages.LOGIN} />
              Więcej
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
