import { useLocation, useParams } from "react-router-dom";
import { CategoryBreadcrumbs } from "../Breadcrumbs";
import {
  Button,
  Pagination,
  RangeSlider,
  Select,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { CategoriesEndpoints } from "../../api/backend-endpoints";
import axios from "axios";
import { Category } from "../../interfaces";
import { ProductsList } from "./ProductsList";

export function CategoryView() {
  const { state } = useLocation();
  const { categoryParent, categorySubParent, categorySlug, categoryId } =
    useParams();

  const [currentCategory, setCurrentCategory] = useState<Category>();

  useEffect(() => {
    if (categoryId) {
      axios
        .get(`${CategoriesEndpoints.GET_HEAD_CATEGORIES}/${categoryId}`)
        .then(({ data: responseData }) => {
          setCurrentCategory(responseData.data);
        });
    }
  }, [categoryId]);
  return (
    <>
      <div>
        {/* TODO: here probably can take from api, anyway it will be fetched for products so */}
        <CategoryBreadcrumbs
          categoryParent={state?.parentUrl || categoryParent}
          categorySubParent={state?.subParentUrl || categorySubParent}
          category={state?.category ?? { categoryId, categorySlug }}
        />
      </div>
      <div className="container-fluid">
        <div className="m-[32px_0_0]">
          {/* category page */}
          <h1 className="text-[22px] font-semibold">
            Category name (make an api call here to retrieve name and items -
            {categorySlug || state?.categorySlug})
          </h1>
          <div className="flex ">
            <aside className="flex-[0_0_15%] mr-[32px]">
              LEFT MENU SOON
              {/* TODO: do left menu depends on item properties later its a filter  */}
              {/* cat left */}
            </aside>

            <div className="flex-1 ">
              <div className="w-full flex justify-between">
                {/* upper menu filter */}
                <div>
                  <Select>
                    <option>Czas realizacji zamówienia Wybierz</option>
                  </Select>
                </div>
                <div>
                  <div>
                    <RangeSlider id="sm-range" sizing="md" />
                  </div>
                  <div className="flex items-center justify-between">
                    <TextInput
                      type="number"
                      sizing="sm"
                      className="mx-[16px]"
                    />
                    -
                    <TextInput
                      type="number"
                      sizing="sm"
                      className="mx-[16px]"
                    />
                  </div>
                </div>

                <div>
                  <Select>
                    <option>Sortowanie domyślne</option>
                    <option>Cena - od najniższej</option>
                  </Select>
                </div>
                <div>
                  <Button className="bg-body text-default border-0 rounded-full w-[50px]">
                    VIEW
                  </Button>
                </div>
              </div>
              <div>
                <ProductsList products={currentCategory?.products} />
              </div>
              <div className="mt-[24px]">
                <Pagination
                  className="text-center"
                  currentPage={1}
                  onPageChange={(page) => {
                    // TODO: add pagianation features
                    console.log("change page", page);
                  }}
                  totalPages={100}
                />
              </div>

              <div className="rounded-md bg-body mt-[50px]">
                SOON SLIDER INFO
                {/*TODO: SLIDER  Poradniki zakupowe */}
              </div>
              {/* cat right */}
            </div>
            {/* cat row */}
          </div>
        </div>

        <div className="border-t pt-[32px]">
          <h3 className="text-[18px] font-semibold">Powiazane kategorie</h3>

          <div>{/* TODO: add category relations */}</div>
        </div>
        <div className="border-t mt-[32px] pt-[32px]">
          Opis soon
          <div>{/* TODO: add category description */}</div>
        </div>
      </div>
    </>
  );
}
