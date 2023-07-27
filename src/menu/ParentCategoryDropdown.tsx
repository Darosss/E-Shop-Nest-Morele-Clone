import React from "react";
import { useContext } from "react";
import { CategoryMenu } from "./CategoryMenu";
import { CategoriesContext } from "../api/CategoriesContext";
import { replaceWholeSpaces } from "../helpers/string.helpers";

export function ParentCategoryDropdown() {
  const { categoriesList } = useContext(CategoriesContext);

  return (
    <>
      {categoriesList.map((category, idx) => (
        <li key={idx} className="group">
          <a
            href={`/${replaceWholeSpaces(category.name)}/`}
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
    </>
  );
}
