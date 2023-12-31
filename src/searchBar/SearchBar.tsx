import React from "react";
import { CategoriesSearch } from "./CategoriesSearch";

export function SearchBar() {
  return (
    <>
      <form className="relative flex">
        <div className="relative w-full">
          <div className="w-full">
            <input
              type="search"
              className="rounded-md h-[32px] md:h-[48px] w-full mr-1 pl-[16px] text-[12px] "
              placeholder="Szukaj w ofercie 2 milionów produktów"
              //TODO: here can take count of products in api
            />
          </div>
          <div>
            {/* ma result wrapper */}
            <div className="absolute w-[50px] hidden md:block md:w-[50px] xl:w-[200px] right-[48px] top-0 before-search-bar-cat h-full">
              <div className="relative">
                <div>
                  {/* morele dropwnown */}
                  <div className="w-full pb-[6px] p-1 ">
                    {/* md top */}
                    <CategoriesSearch />
                  </div>

                  <div>{/* md list */}</div>
                </div>
                {/* TODO: drop down choose category menu */}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex absolute w-[48px] text-[20px] bg-orange top-0 bottom-0 right-0 justify-center items-center hidden md:block md:h-[48px] rounded-r-md"
        >
          &#128269;
        </button>
      </form>
    </>
  );
}
