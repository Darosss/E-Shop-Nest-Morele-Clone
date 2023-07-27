import React from "react";
import { ParentCategoryDropdown } from "./ParentCategoryDropdown";

export function CategoriesMenu() {
  return (
    <>
      <div className="min-w-[120px] bg-white shadow-default">
        <div className="container-fluid">
          <div className="mr-[8px] flex flex-wrap relative">
            <ParentCategoryDropdown />
            <nav className="w-100 min-w-[400px] flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)]">
              <div className="pl-[10px] w-full justify-between items-end ">
                <div className="flex [&>div]:mr-[10px] [&>div]:p-[10px] [&>div]:cursor-pointer justify-between">
                  <div>ODBIERZ KOD RABATOWY</div>
                  <div>KONIFUGRATOR PC</div>
                  <div>OUTLET</div>
                  <div>PORADNIKI</div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
