import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { ApiResponse, Category } from "../interfaces";
import { CategoriesEndpoints } from "./backend-endpoints";
import axios from "axios";

interface CategoryDataContextType {
  categoriesList: Category[];
}

export const CategoriesContext = createContext<CategoryDataContextType>({
  categoriesList: [],
});

export function CategoriesContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get<ApiResponse<Category[]>>(CategoriesEndpoints.GET_HEAD_CATEGORIES)
      .then((response) => {
        console.log(response, "categories context");
        setCategoriesList(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesList }}>
      {children}
    </CategoriesContext.Provider>
  );
}
