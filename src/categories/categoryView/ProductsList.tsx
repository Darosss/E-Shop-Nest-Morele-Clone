import { Button } from "flowbite-react";
import { Product } from "../../interfaces";
import { FavouriteButton } from "../FavouriteButton";
import { StarRating } from "../../StarRating/StarRating";
import { Link } from "react-router-dom";

interface ProductsListProps {
  products?: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <>
      {products?.map((product, idx) => (
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
              <FavouriteButton productId={product.id} />
            </div>
            <div className="ml-[64px] [&>*]:mt-[16px]">
              <h3 className="font-semibold text-[17px]">
                <Link to={`/product/${product.name}/${product.id}`}>
                  {product.name}
                </Link>
                <span className="ml-[8px] text-orange text-[14px]">
                  BESTSELLER
                </span>
              </h3>
              <div className="flex [&>div]:mr-[32px]">
                <div>
                  <StarRating reviewRating={4} reviewCount={23} />
                  {/* TODO: add reviewrating + review count from server db */}
                </div>
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
                {product.price.toLocaleString()} zł
              </div>
              {/* TODO: add calculate instalment depends on minimum */}
              <div className="text-[10px] underline">rata od 60,84 zł</div>
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
    </>
  );
}
