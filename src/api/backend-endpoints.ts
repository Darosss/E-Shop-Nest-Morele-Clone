export enum CategoriesEndpoints {
  GET_HEAD_CATEGORIES = "/category",
  GET_CATEGORY_BY_SLUG = GET_HEAD_CATEGORIES + "/slug",
}

export enum ProductsEndpoints {
  GET_PRODUCTS = "/product",
  PROPERTY = `${GET_PRODUCTS}/property`,
  PROPERTY_CATEGORY = `${PROPERTY}/category`,
  PRODUCT_PROPERTY = `${GET_PRODUCTS}/product-property`,
  PRODUCT_PROPERTY_BY_PRODUCT_ID = `${PRODUCT_PROPERTY}/product`,
}

export enum AuthEndpoints {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  PROFILE = "/auth/profile",
}
