import { useParams } from "react-router-dom";
import { CategoryBreadcrumbs } from "../Breadcrumbs";
import { AllCategories } from "./AllCategories";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoriesEndpoints } from "../../api/backend-endpoints";
import { Category } from "../../interfaces";
import { CarouselProducts } from "../../carouselProducts";

export function CategoryHeadView() {
  const { categoryParent, categorySubParent } = useParams();

  return (
    <>
      <div>
        <CategoryBreadcrumbs />
      </div>
      <div className="m-[32px_0_32px]">
        <h1 className="text-[22px] font-semibold">
          {categorySubParent || categoryParent}
        </h1>
      </div>

      <div className="bg-body rounded-md">
        <div className="py-2 pl-4 text-[18px] font-semibold">
          Wszystkie categorie
        </div>
        <div className="flex flex-wrap [&>a]:m-2 [&>a]:m-2 p-2">
          <AllCategories />
        </div>
      </div>

      {categorySubParent ? (
        <MostlyBought />
      ) : (
        <>TODO: Soon co w trawie piszczy </>
      )}

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

function MostlyBought() {
  const { categoryParent, categorySubParent } = useParams();
  const [pagination] = useState<{ limit: number; page: number }>({
    limit: 10,
    page: 0,
  });
  const [currentCat, setCurrentCat] = useState<Category>();

  useEffect(() => {
    axios
      .get<{ data: Category }>(
        `${CategoriesEndpoints.GET_CATEGORY_BY_SLUG}/${categoryParent}/${
          categorySubParent ?? ""
        }?limit=${pagination.limit}&page=${
          pagination.page
        }&sortBy=sold&sortOrder=0`
      )
      .then(({ data: responseData }) => {
        setCurrentCat(responseData.data);
      });
  }, [categoryParent, categorySubParent, pagination.limit, pagination.page]);

  return (
    <div className="bg-body rounded-md mt-[32px]">
      <div className="py-2 pl-4 text-[18px] font-semibold">
        Najczęsciej kupowane
      </div>
      <div>
        {currentCat?.products ? (
          <CarouselProducts
            items={currentCat?.products.sort((a, b) => b.sold - a.sold)}
            mostBought={true}
          />
        ) : null}
      </div>
    </div>
  );
}
