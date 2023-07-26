import React from "react";
import { Category } from "../interfaces";

export function CategoryMenu({
  subcategories,
  className = "",
}: {
  subcategories?: Category[];
  className?: string;
}) {
  return (
    <>
      <div
        className={`hidden rounded border-[2px] border-orange bg-body absolute left-[260px] min-h-[100%] p-[32px] top-0 z-1 right-0 ${className}`}
      >
        {/* cn-shop-window cn-level */}
        <div className="flex justify-between">
          {/* cn rows */}
          {subcategories?.map((category, idx) => (
            <ul key={idx}>
              <li>{category.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
