import { useContext, useEffect, useState } from "react";
import { ApiResponse, Product } from "../interfaces";
import { ProductsEndpoints } from "../api/backend-endpoints";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../auth";
import { Select } from "flowbite-react";
import { ProductMenu } from "./ProductMenu";
import { ProductInfo } from "./ProductInfo";
import { ProductImages } from "./ProductImages";

export function ProductView() {
  // TODO: make product call by id
  // make product properties call by product id
  const [productData, setProductData] = useState<Product | null>(null);

  const { user } = useContext(AuthContext);

  const { name, id } = useParams();

  useEffect(() => {
    if (!name || !id || !user) return;
    axios
      .get<ApiResponse<Product>>(`${ProductsEndpoints.GET_PRODUCTS}/${id}`)
      .then(({ data: productDataResponse }) =>
        setProductData(productDataResponse.data)
      )
      .catch((err) => console.error(err));
  }, [id, name, user]);

  if (!productData) return null;

  return (
    <div>
      <div className="m-[40px]"> breadcrumbs soon </div>
      <div className="[&>div]:w-[100vw]">
        <div className="flex flex-row">
          <div className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl w-[95dvw] lg:w-[65dvw] flex flex-col max-h-[420px]">
            <div className="font-semibold text-[20px]">{productData.name}</div>
            <div className="flex flex-row justify-between h-full">
              {/* FIXME: for now it's static height, later figure out depends on images and set min max */}
              <div className="w-[65%] border-r">
                <ProductImages />
              </div>
              <div className="w-[35%] pl-[32px]">
                {/* TODO: add variants component */}
                <ProductInfo />
              </div>
            </div>
          </div>
          <div className="ml-[16px] w-[346px] lg:w-[416px] hidden lg:block">
            <div className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl ">
              {/* TODO: this show depends on promotions etc */}
              Kup ten product i otrzymaj xxx zł rabatu na kolejne zakupy
            </div>
            <div className="bg-body p-[8px_0_16px_16px] rounded-tl-xl w-[60%] relative">
              <Link
                to=""
                className="text-[12px] lg:text-[14px] hover:underline"
              >
                Sprawdzona Niska cena <span className="text-orange"> &gt;</span>
              </Link>
            </div>
            <div className="bg-body p-[8px_0_24px_16px] rounded-b-xl rounded-r-xl">
              <div className="flex flex-row justify-between [&>div]:w-[50%] [&>div]:p-1">
                <div className="border-r text-[24px] font-semibold">
                  {productData.price} zł
                </div>
                <div>
                  <span className="text-[12px]">
                    lub u Ciebie już jutro! za
                  </span>
                  <br />
                  <span className="font-semibold">{productData.price} zł</span>
                  <br />
                  <span className="text-orange"> Sprawdź ofertę</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center [&>*]:m-4 [&>*]:p-3">
                  {/* TODO: select number of items to buy */}
                  <Select>
                    <option>1</option>
                    <option>2</option>
                  </Select>
                  <button className="common-button-w-background">
                    Do koszyka
                  </button>
                </div>
                <div className="text-[12px]">
                  {/* TODO: add left / how much items are avaialble */}
                  Została tylko 1 szt.
                </div>
              </div>

              <div className="flex flex-col justify-around border-t border-light-gray mt-[16px] [&>div]:p-4">
                <div className="border-b border-light-gray">
                  Zamów teraz, aby odebrać za ok. x dni (poniedziałek)
                  <br />
                  Dostawa do <span className="text-orange">xx-xxx, XYZ</span>
                </div>
                <div className="border-b border-light-gray">
                  Darmowa dostawa
                </div>
                <div className="border-b border-light-gray">Rata od xx zł</div>
                <div className="border-b border-light-gray">
                  Leasing od xx zł
                </div>
                <div className="border-b border-light-gray">
                  Wiecej ofert (xx) od xx zł
                </div>
              </div>
            </div>
            <div className="bg-body m-[32px_0] p-[8px_0_24px_16px] rounded-xl">
              Zapytaj ekspertow
            </div>
          </div>
        </div>
        <ProductMenu />
      </div>
    </div>
  );
}
