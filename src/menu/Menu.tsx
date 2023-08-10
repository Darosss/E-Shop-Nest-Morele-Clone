import { useContext } from "react";
import { SearchBar } from "../searchBar";
import { MenuImages, MenuRoutes } from "./menu.enum";
import { AuthContext } from "../auth";
import { ProfilDropdown } from "./ProfilDropdown";
import { Link } from "react-router-dom";

export function HeadMenu() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <header className="min-w-[120px] py-[20px] bg-white shadow-default">
          <div className="container-fluid">
            <div className="ml-[-8px] mr-[8px] flex flex-row flex-wrap">
              <div className="max-w-full w-[280px] items-center flex pt-[2px] pl-[42px]">
                <h1>
                  <Link to="/">
                    <img src="/static/shop/logo/image-logo-morele.svg" />
                  </Link>
                </h1>
              </div>
              <div className="flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)] flex items-center">
                <div className="w-[50%] flex-[0_0_50%]">
                  <SearchBar />
                </div>
                <div className="max-w-[680px] pl-[10px]">
                  <div className="flex items-center justify-between [&>a]:flex [&>a]:items-center gap-2 [&>*>img]:m-2 [&>*>img]:w-[30px] [&>div]:flex">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
