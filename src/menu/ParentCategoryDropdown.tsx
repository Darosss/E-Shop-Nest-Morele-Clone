import { useContext } from "react";
import { CategoryMenu } from "./CategoryMenu";
import { CategoriesContext } from "../api/CategoriesContext";
import { Link, useLocation } from "react-router-dom";

export function ParentCategoryDropdown() {
  const { categoriesList } = useContext(CategoriesContext);
  const { pathname } = useLocation();
  return (
    <>
      <nav className="group/menu head-menu max-w-full w-[260px] shadow-default flex content-center justify-center ">
        <div className="flex align-center items-center text-orange font-semibold ">
          KATEGORIE
          {/* cn-heading */}
        </div>
        <div
          className={`${
            pathname === "/" ? "flex" : "group-hover/menu:flex hidden"
          } absolute top-full rounded-b-xl min-h-[597px] left-0 right-0 group-hover/menu:z-40`}
        >
          {/* cn-window*/}
          <div className="bg-body w-[260px] min-h-[597px] ">
            {/* cn-bar */}
            <div>
              {/* cn-shop cn current frontend */}
              <ul className="m-[-10px_0_10px] p-[16px_0_8px] [&>li]:p-1 text-left [&>li]:font-semibold text-[14px] [&>li>span]:p-[8px_40px_8px_16px] [&>li]:mt-[8px] ">
                {/* categories
            cn current deparments cn level */}
                {categoriesList.map((category, idx) => {
                  const parentUrl = category.name;
                  return (
                    <li key={idx} className="group">
                      <Link
                        to={`/${parentUrl}/`}
                        className="group-hover:text-orange"
                      >
                        <span className=" p-[8px_40px_8px_16px] relative z-30">
                          {category.name}
                        </span>
                      </Link>

                      <CategoryMenu
                        className="group-hover:block"
                        parentUrl={parentUrl}
                        subcategories={category.subcategories}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
