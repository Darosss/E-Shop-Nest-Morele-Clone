import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoriesEndpoints } from "../../api/backend-endpoints";
import { Category } from "../../interfaces";

export function AllCategories() {
  const { categoryParent, categorySubParent } = useParams();
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  useEffect(() => {
    if (categoryParent || categorySubParent) {
      axios
        .get(
          `${CategoriesEndpoints.GET_CATEGORY_BY_SLUG}/${categoryParent}/${
            categorySubParent ?? ""
          }`
        )
        .then((response) => {
          const responseData = response.data.data;
          if (!responseData) return;
          setSubCategories(responseData.subcategories);
        });
    }
  }, [categoryParent, categorySubParent]);

  return (
    <>
      {subCategories?.map((category, idx) => (
        <Link
          key={idx}
          to={`${
            categorySubParent
              ? `/${categoryParent}/${categorySubParent}/${category.name}`
              : `${category.name}`
          }`}
          className="flex flex-[0_0_24%] items-center justify-between p-2"
        >
          <div className="h-[80px]  overflow-hidden flex">
            <img src={`/category/${category.images[0]}`} alt="category" />
          </div>
          <div className="text-[16px] p-2 flex flex-[0_0_calc(100%-104px)]">
            {category.name} (400)
            {/* TODO: add count of items in category */}
          </div>
        </Link>
      ))}
    </>
  );
}
