import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesEndpoints } from "../api/backend-endpoints";
import { Category } from "../interfaces";
import { ApiResponse } from "../interfaces/api-data";
import { CategoryMenu } from "./CategoryMenu";

export function CategoriesMenu() {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get<ApiResponse<Category[]>>(CategoriesEndpoints.GET_HEAD_CATEGORIES)
      .then((response) => {
        console.log(response);
        setCategoriesList(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="min-w-[120px] bg-white shadow-default">
        <div className="container-fluid">
          <div className="mr-[8px] flex flex-wrap relative">
            <nav className="max-w-full w-[260px] shadow-default flex content-center justify-center ">
              <div className="flex align-center items-center text-orange font-semibold">
                KATEGORIE
                {/* cn-heading */}
              </div>
              <div className="absolute top-full rounded-b-xl min-h-[597px] left-0 right-0">
                {/* cn-window*/}
                <div className="bg-body w-[260px] min-h-[597px] ">
                  {/* cn-bar */}
                  <div>
                    {/* cn-shop cn current frontend */}
                    <ul className="m-[-10px_0_10px] p-[16px_0_8px] [&>li]:p-1 text-left [&>li]:font-semibold text-[14px] [&>li>span]:p-[8px_40px_8px_16px] [&>li]:mt-[8px] ">
                      {/* categories
                      cn current deparments cn level */}
                      {categoriesList.map((category, idx) => (
                        <li key={idx} className="group">
                          <a
                            href={`/category/${category.name}/`}
                            className="group-hover:text-orange"
                          >
                            <span className=" p-[8px_40px_8px_16px] relative z-30">
                              {category.name}
                            </span>
                          </a>

                          <CategoryMenu
                            className="group-hover:block"
                            subcategories={category.subcategories}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
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
