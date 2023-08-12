import React from "react";
import { useLocation } from "react-router-dom";
import { CategoryBreadcrumbs } from "../Breadcrumbs";
import { AllCategories } from "./AllCategories";

export function CategoryHeadView() {
  const { state } = useLocation();

  return (
    <>
      <div>
        <CategoryBreadcrumbs
          categoryParent={state?.parentUrl}
          categorySubParent={state?.subParentUrl}
        />
      </div>
      <div className="m-[32px_0_32px]">
        <h1 className="text-[22px] font-semibold">
          {state?.subParentUrl || state?.parentUrl}
        </h1>
      </div>

      <div className="bg-body rounded-md">
        <div className="py-2 pl-4 text-[18px] font-semibold">
          Wszystkie categorie
        </div>
        <div className="flex flex-wrap [&>a]:m-2 [&>a]:m-2 p-2">
          <AllCategories  />
        </div>
      </div>

      <div className="bg-body rounded-md mt-[32px]">
        <div className="py-2 pl-4 text-[18px] font-semibold">
          Najczęsciej kupowane
        </div>
        <div>{/* TODO: add slider */}</div>
      </div>

      <div className="bg-body rounded-md mt-[32px]">
        <div className="py-2 pl-4 text-[18px] font-semibold">
          Rekomendowane przez specjalistów
        </div>
        <div>{/* TODO: add slider */}</div>
      </div>

      <div className="bg-body rounded-md mt-[32px]">
        <div className="py-2 pl-4 text-[18px] font-semibold">
          Promocje i nowości
        </div>
        <div>{/* TODO: add slider */}</div>
      </div>
    </>
  );
}
