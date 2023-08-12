import React from "react";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import { replaceWholeSpaces } from "../helpers/string.helpers";

/**
 * Props for the BreadcrumbLink component.
 */
export interface CategoryBreadcrumbsProps {
  /**
   * The category parent path.
   */
  categoryParent?: string;
  /**
   * The category subparent path.
   */
  categorySubParent?: string;
  /**
   * The category slug path.
   */
  category?: {
    categorySlug: string;
    categoryId: number;
  };
}

export function CategoryBreadcrumbs({
  categoryParent,
  categorySubParent,
  category,
}: CategoryBreadcrumbsProps) {
  return (
    <Breadcrumb
      className="py-3 [&>ol>li>*]:text-[16px]"
      aria-label="category-breadcrumb"
    >
      <Breadcrumb.Item href="/">
        <p>morele.net</p>
      </Breadcrumb.Item>
      {categoryParent ? (
        <Breadcrumb.Item>
          <BreadcrumbLink categoryParent={categoryParent} />
        </Breadcrumb.Item>
      ) : null}
      {categorySubParent ? (
        <Breadcrumb.Item>
          <BreadcrumbLink
            categoryParent={categoryParent}
            categorySubParent={categorySubParent}
          />
        </Breadcrumb.Item>
      ) : null}
      {category ? (
        <Breadcrumb.Item>
          <BreadcrumbLink categoryParent="category" category={category} />
        </Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
}

/**
 * BreadcrumbLink component represents a breadcrumb link that generates the 'to' prop
 * based on the provided category paths (categoryParent, categorySubParent, and categorySlug).
 * The link content displays the name of the last provided category path.
 *
 * @param {BreadcrumbLinkProps} props - The component props.
 * @returns {JSX.Element} JSX.Element representing the breadcrumb link.
 */
export function BreadcrumbLink({
  categoryParent,
  categorySubParent,
  category,
}: CategoryBreadcrumbsProps): JSX.Element {
  let toPath = "";
  if (!category) {
    toPath = replaceWholeSpaces(
      [categoryParent, categorySubParent].filter(Boolean).join("/")
    );
  } else {
    toPath = `category/${replaceWholeSpaces(category.categorySlug)}/${
      category.categoryId
    }`;
  }
  const lastCategory =
    category?.categorySlug || categorySubParent || categoryParent;
  return (
    <Link
      to={"/" + toPath}
      state={{
        parentUrl: categoryParent,
        subParentUrl: categorySubParent,
        category: category,
      }}
    >
      {lastCategory}
    </Link>
  );
}
