export enum CategoriesEndpoints {
  GET_HEAD_CATEGORIES = "/category",
  GET_CATEGORY_BY_SLUG = GET_HEAD_CATEGORIES + "/slug",
}

export enum AuthEndpoints {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  PROFILE = "/auth/profile",
}
