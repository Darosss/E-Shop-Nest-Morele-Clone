import { SearchBar } from "../searchBar";
import { Link } from "react-router-dom";
import { MenuHeadButtons } from "./MenuHeadButtons";

export function HeadMenu() {
  return (
    <>
      <div>
        <header className="min-w-[120px] py-[20px] bg-white shadow-default">
          <div className="container-fluid">
            <div className="ml-[-8px] mr-[8px] flex flex-row flex-wrap">
              <div className="max-w-full items-center flex pt-[2px] md:mr-1 2xl:pl-[42px] w-[120px] md:w-[150px] xl:w-[250px] 2xl:mr-0 ">
                <h1>
                  <Link to="/">
                    <img
                      src="/static/shop/logo/image-logo-morele.svg"
                      className="w-[90%]"
                    />
                  </Link>
                </h1>
              </div>
              <div className="flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)] flex items-center">
                <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_40%] 2xl:flex-[0_0_50%]">
                  <SearchBar />
                </div>
                <div className="max-w-[680px] pl-[10px] relative hidden lg:flex">
                  <div className="flex items-center justify-between [&>a]:flex [&>a]:items-center gap-2 [&>*>img]:m-2 [&>*>img]:w-[30px] [&>div]:flex">
                    <MenuHeadButtons />
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
