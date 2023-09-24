import { useContext } from "react";
import { AuthContext } from "../../auth";
import { MenuRoutes, MenuImages } from "../menu.enum";
import { MobilleMenuContext } from "./mobileMenuContext";

export function MobileMenuMore() {
  const { changeShowMoreMenu } = useContext(MobilleMenuContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="z-[99] bg-body rounded-xl shadow-default fixed top-[65%] right-0 left-0 bottom-0 h-[100dvh] p-4 flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center justify-center p-4 pt-8"> Menu </div>
        <div className="[&>*>img]:w-[3%] flex flex-col [&>a]:flex [&>a>*]:mr-4 [&>a]:pt-4 [&>a]:border-b [&>a]:border-light-gray [&>a]:pb-2 ">
          <a href={MenuRoutes.ZIP_CODE} className="hover:underline">
            <img src={MenuImages.ZIP_CODE} />
            Kod pocztowy
          </a>

          <a href={MenuRoutes.CONTACT} className="hover:underline">
            <img src={MenuImages.CONTACT} />
            Kontakt
          </a>

          <a
            href={user ? MenuRoutes.SHOP_LIST : MenuRoutes.LOGIN}
            className="hover:underline"
          >
            <img src={MenuImages.SHOP_LIST} />
            Listy zakupowe
          </a>

          <button
            className="mt-2 common-button-w-outline"
            onClick={() => changeShowMoreMenu(false)}
          >
            {" "}
            Zamknij{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
