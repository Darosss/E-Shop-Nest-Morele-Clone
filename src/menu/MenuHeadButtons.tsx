import { useContext } from "react";
import { AuthContext } from "../auth";
import { ProfilDropdown } from "./ProfilDropdown";
import { MenuRoutes, MenuImages } from "./menu.enum";

export function MenuHeadButtons() {
  const { user } = useContext(AuthContext);
  return (
    <>
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

      {user ? (
        <div className="hover:underline [&>*]:text-default [&>*]:border-0">
          <img src={MenuImages.LOGIN} />
          <ProfilDropdown user={user} />
        </div>
      ) : (
        <a href={MenuRoutes.LOGIN} className="hover:underline">
          <img src={MenuImages.LOGIN} />
          Zaloguj się <br /> Załóż konto
        </a>
      )}

      <a href={MenuRoutes.CART} className="hover:underline">
        <img src={MenuImages.CART} />
        0,00 zł
        {/* TODO: add get price from localstorage
                          // probably will need to store items ids and price into localstorage
                        */}
      </a>
    </>
  );
}
