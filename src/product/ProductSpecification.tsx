import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsEndpoints } from "../api/backend-endpoints";
import { ApiResponse, ProductProperty } from "../interfaces";
import { useParams } from "react-router-dom";
import { AuthContext } from "../auth";

type GroupedProductSpecification = Map<string, ProductProperty[]>;

export function ProductSpecification() {
  const [groupedProductSpecification, setGroupedProductSpecification] =
    useState<GroupedProductSpecification>(new Map());

  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    if (!user || !id) return;
    axios
      .get<ApiResponse<ProductProperty[]>>(
        `${ProductsEndpoints.PRODUCT_PROPERTY_BY_PRODUCT_ID}/${id}`
      )
      .then(({ data: productPropertiesResponse }) => {
        const groupedProductProperties: GroupedProductSpecification = new Map();
        productPropertiesResponse.data.forEach((item) => {
          const categoryName = item.property.category.name;

          if (!groupedProductProperties.has(categoryName)) {
            groupedProductProperties.set(categoryName, []);
          }
          // Know that is empty array with data;
          const previousResultData =
            groupedProductProperties.get(categoryName)!;

          groupedProductProperties.set(categoryName, [
            ...previousResultData,
            item,
          ]);
        });

        setGroupedProductSpecification(groupedProductProperties);
      })
      .catch((err) => console.error(err));
  }, [user, id]);

  if (!groupedProductSpecification) return null;

  console.log(groupedProductSpecification);
  return (
    <div>
      <div className="text-[18px] font-semibold">Specyfikacja </div>
      Wyróznione przez eksperta soon
      {/* TODO: expert highlight */}
      {/* <ExpertHighlight /> */}
      {[...groupedProductSpecification].map(
        ([categoryName, productProperties], idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row overflow-hidden mt-4"
          >
            <div className="md:w-[45%]  md:w-full py-4">
              {categoryName.toUpperCase()}
            </div>
            <div className="w-full">
              {productProperties.map((property, propertyIdx) => (
                <div
                  key={propertyIdx}
                  className="flex flex-row justify-between border-b border-light-gray p-4"
                >
                  <div className="w-[50%] text-dark-gray">
                    {property.property.name}
                  </div>
                  <div className="w-[50%]">{property.value}</div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
