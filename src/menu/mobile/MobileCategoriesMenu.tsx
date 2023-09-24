import { useContext, useState } from "react";
import { CategoriesContext } from "../../api/CategoriesContext";
import { Category } from "../../interfaces";
import { SearchBar } from "../../searchBar";
import { MobileCategoriesList } from "./MobileCategoriesList";
import { MobilleMenuContext } from "./mobileMenuContext";

export function MobileCategoriesMenu() {
  const { changeShowSubCategories } = useContext(MobilleMenuContext);
  const { categoriesList } = useContext(CategoriesContext);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  function handleOnClickCategory(categoryId: number) {
    changeShowSubCategories(true);

    const foundCategory = categoriesList.find(({ id }) => id === categoryId);

    if (foundCategory) setCurrentCategory(foundCategory);
  }

  function handleOnClickBackFromSubCat() {
    setCurrentCategory(null);
  }

  console.log(currentCategory);
  return (
    <div className="bg-body fixed top-0 right-0 left-0 bottom-0 h-[100dvh] p-4 flex flex-col">
      <div className="flex-[0_0_5%]">
        <SearchBar />
      </div>

      <div className="flex-1 mt-6 relative">
        {currentCategory ? (
          <MobileCategoriesList
            onClickBack={handleOnClickBackFromSubCat}
            currentCategory={currentCategory}
          />
        ) : null}
        <ul className="[&>li]:p-4 [&>li]:border-b [&>li]:border-light-gray text-[16px]">
          {categoriesList.map((category, idx) => {
            return (
              <li key={idx} className="group">
                <button
                  className="relative z-30"
                  onClick={() => handleOnClickCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
