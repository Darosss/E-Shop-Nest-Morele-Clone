import React from "react";
import { Category } from "../interfaces";
import { BreadcrumbLink } from "../categories";

export function CategoryMenu({
  subcategories,
  className = "",
  parentUrl,
}: {
  subcategories?: Category[];
  className?: string;
  parentUrl: string;
}) {
  return (
    <>
      <div
        className={`hidden  rounded border-[2px] border-orange bg-body absolute left-[260px] min-h-[100%] p-[32px] top-0 z-1 right-0 ${className} `}
      >
        {/* cn-shop-window cn-level */}
        <div className="flex justify-between">
          {/* cn rows */}

          {subcategories?.map((category, idx) => (
            <ul key={idx} className="font-normal">
              <li className="font-semibold">
                <BreadcrumbLink
                  categoryParent={parentUrl}
                  categorySubParent={category.name}
                />
              </li>
              {category.subcategories?.map((categorySlug, thidIdx) => (
                <li key={thidIdx}>
                  <BreadcrumbLink
                    categoryParent={parentUrl}
                    categorySubParent={category.name}
                    categorySlug={`${categorySlug.name}-${categorySlug.id}`}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
