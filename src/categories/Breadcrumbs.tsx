import { useContext, useEffect, useState } from "react";
import { Breadcrumb, Dropdown } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { CategoriesContext } from "../api/CategoriesContext";

export function CategoryBreadcrumbs() {
  const { categoryParent, categorySubParent, category } = useParams();
  const { categoriesList } = useContext(CategoriesContext);

  const [parentSubCatNames, setParentSubCatNames] = useState<string[]>([]);
  const [subParentCatNames, setSubParentCatNames] = useState<string[]>([]);

  useEffect(() => {
    const parentCatObj = categoriesList.find(
      (cat) => cat.name === categoryParent
    );
    const subCatsParentObj = parentCatObj?.subcategories?.map(
      (subCat) => subCat
    );
    if (!parentCatObj) return;

    setParentSubCatNames(
      subCatsParentObj
        ?.map((cat) => {
          if (cat.name !== categorySubParent)
            return `${categoryParent}/${cat.name}`;
          else return "";
        })
        .filter(Boolean) || []
    );
    setSubParentCatNames(
      subCatsParentObj
        ?.map((cat) => {
          if (cat.name === categorySubParent) {
            return cat.subcategories?.map((thirdDepthCat) => {
              if (thirdDepthCat.name !== category) {
                return `${parentCatObj.name}/${cat.name}/${thirdDepthCat.name}`;
              } else return "";
            });
          } else return "";
        })
        .flat()
        .filter(Boolean) || []
    );
  }, [categoriesList, categoryParent, categorySubParent, category]);

  return (
    <Breadcrumb
      className="py-3 [&>ol>li>*]:text-[16px]"
      aria-label="category-breadcrumb"
    >
      <Breadcrumb.Item>
        <Link to="/">morele.net</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <BreadcrumbDropdownMenu
          label={categoryParent || ""}
          items={parentSubCatNames}
        />
      </Breadcrumb.Item>
      {categorySubParent || category ? (
        <Breadcrumb.Item>
          <BreadcrumbDropdownMenu
            label={categorySubParent || ""}
            items={subParentCatNames}
          />
        </Breadcrumb.Item>
      ) : null}
      {category ? (
        <Breadcrumb.Item>
          <Link to="">{category}</Link>
        </Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
}

interface BreadcrumbDropdownMenuProps {
  label: string;
  items: string[];
}

function BreadcrumbDropdownMenu({ label, items }: BreadcrumbDropdownMenuProps) {
  return (
    <div className="[&>*]:text-default [&>*]:border-0 [&>*]:hover:bg-body [&>*]:rounded-none">
      {items.length > 0 ? (
        <Dropdown label={label} trigger="hover" className="bg-body mt-[-10px]">
          {items.map((item, idx) => {
            const splitUrl = item.split("/");
            return (
              <Dropdown.Item key={idx} className="hover:underline">
                <Link to={`/${item}`}>{splitUrl[splitUrl.length - 1]}</Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      ) : (
        <Link to={`/${label}`}>{label}</Link>
      )}
    </div>
  );
}
