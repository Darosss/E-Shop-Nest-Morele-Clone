import React from "react";
import { ParentCategoryDropdown } from "./ParentCategoryDropdown";

const additionalLinks = [
  { name: "ODBIERZ KOD RABATOWY", url: "/" },
  { name: "KONIFUGRATOR PC", url: "/" },
  { name: "OUTLET", url: "/" },
  { name: "PORADNIKI", url: "/" },
];

export function CategoriesMenu() {
  return (
    <>
      <div className="min-w-[120px] bg-white shadow-default">
        <div className="container-fluid">
          <div className="hidden lg:flex mr-[8px]  flex-wrap relative">
            <ParentCategoryDropdown />
            <nav className="w-100 min-w-[400px] flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)]">
              <div className="pl-[10px] w-full justify-between items-end">
                <div className="flex [&>div]:mr-[10px] [&>div]:p-[10px] [&>div]:cursor-pointer justify-between mt-2">
                  {additionalLinks.map(({ name, url }, idx) => (
                    <div key={idx} className="relative group">
                      <a href={url}>
                        <span>{name}</span>
                        <span className="hidden border-b border-2 border-orange absolute left-0 right-0 bottom-0 group-hover:block"></span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
