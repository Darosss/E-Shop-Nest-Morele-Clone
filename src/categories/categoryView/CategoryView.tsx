import { useLocation, useParams } from "react-router-dom";
import { CategoryBreadcrumbs } from "../Breadcrumbs";
import {
  Button,
  Pagination,
  RangeSlider,
  Select,
  TextInput,
} from "flowbite-react";
import { FavouriteButton } from "../FavouriteButton";

export function CategoryView() {
  const { state } = useLocation();
  const { categoryParent, categorySubParent, categorySlug } = useParams();

  return (
    <>
      <div>
        {/* TODO: here probably can take from api, anyway it will be fetched for products so */}
        <CategoryBreadcrumbs
          categoryParent={state?.parentUrl || categoryParent}
          categorySubParent={state?.subParentUrl || categorySubParent}
          categorySlug={state?.categorySlug || categorySlug}
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
                {Array(10)
                  .fill(0)
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-body round-md mt-[32px] p-[16px_8px_8px_64px] flex "
                    >
                      <div className="flex-[0_0_15%]">
                        <img src="/products/5939894_0_i256.jpg" alt="product" />
                        <Button className="mt-1 w-full text-default [&>*]:text-[10px]">
                          Dodaj do porównania
                        </Button>
                      </div>

                      <div className="flex-[1_0_50%] [&>div]:mt-[16px] relative">
                        <div className="absolute left-[-2rem] top-[-3rem] transform scale-75">
                          <FavouriteButton productId={idx} />
                        </div>
                        <div className="ml-[64px] [&>*]:mt-[16px]">
                          <h3 className="font-semibold text-[17px]">
                            Smartfon Apple iPhone 11 64GB Dual SIM Czarny
                            (MHDA3)
                            <span className="ml-[8px] text-orange text-[14px]">
                              BESTSELLER
                            </span>
                          </h3>
                          <div className="flex [&>div]:mr-[32px]">
                            <div>***** (23) </div>
                            <div>19 pytań</div>
                            <div>Kupily 44 osoby</div>
                          </div>
                          <div>
                            <ol className="text-[12px]">
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              <li>Aparat głowny: 12 + 12Mpix</li>
                              {/* TODO: add item head info */}
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div className="flex-[0_0_24%] [&>div]:mt-[16px]">
                        <div>
                          <div className="text-[24px] font-semibold">
                            2 397 zł
                          </div>
                          <div className="text-[10px] underline">
                            rata od 60,84 zł
                          </div>
                        </div>

                        <div>
                          <div>Darmowa dostawa!</div>
                          <div>U Ciebie za ok. 3dni! (poniedziałek) </div>
                          {/*TODO: divhidden Outlet item if is */}
                          {/*TODO: div hidden promotion like 10% rabat */}
                        </div>

                        <div> 13 ofert od 3 197,91 zł</div>

                        <div>
                          <Button className="common-button-w-background h-[50px] font-semibold">
                            Do Koszyka
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
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
