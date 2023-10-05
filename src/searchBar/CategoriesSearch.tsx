import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../api/CategoriesContext";
import { Select } from "flowbite-react";

export function CategoriesSearch() {
  const { categoriesList } = useContext(CategoriesContext);

  return (
    <Select className="[&>*>*]:border-0" required>
      <option>Wszystkie działy</option>
      {categoriesList?.map((category, idx) => (
        <option key={idx}>{category.name}</option>
      ))}
    </Select>
  );
}
