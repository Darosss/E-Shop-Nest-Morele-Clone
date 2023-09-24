import { useContext } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../interfaces";
import { MobilleMenuContext } from "./mobileMenuContext";

interface MobileCategoriesListProps {
  onClickBack: () => void;
  currentCategory: Category;
}

export function MobileCategoriesList({
  onClickBack,
  currentCategory,
}: MobileCategoriesListProps) {
  const {
    changeShowCategoriesMenu,
    showSubCategories,
    changeShowSubCategories,
  } = useContext(MobilleMenuContext);

  return (
    <div
      className={`${
        showSubCategories ? "flex" : "hidden"
      } absolute top-0 bottom-0 left-0 right-0 bg-body z-50 flex-col`}
    >
      <div className="flex border-b border-light-gray flex-[0_0_5%] px-1">
        <button
          className="w-full h-full flex items-center"
          onClick={() => {
            changeShowSubCategories(false);
            onClickBack();
          }}
        >
          <span className="text-[30px] flex-[0_0_5%]">{"<"} </span>
          <span className="text-[18px] flex-1">{currentCategory.name}</span>
        </button>
      </div>
      <div className="mt-4 flex-[0_0_5%] flex justify-center">
        <button className="rounded-md w-[99%] bg-content h-[80%] font-semibold">
          <Link
            to={currentCategory.name}
            className="block bg-default flex-1 h-full flex items-center justify-center"
          >
            Pokaż wszystko w {currentCategory.name}
          </Link>
        </button>
      </div>
      <div className="flex flex-col">
        <ul className="text-[16px] p-2">
          {currentCategory.subcategories?.map((secondDepthCategory, idx) => (
            <li key={idx} className="ml-4 pt-2">
              <Link
                onClick={() => changeShowCategoriesMenu(false)}
                to={secondDepthCategory.name}
                className="block hover:underline"
              >
                {secondDepthCategory.name}
              </Link>
              <ul>
                {secondDepthCategory.subcategories?.map(
                  (thirdDepthdCategory, idx) => (
                    <li className="border-b border-light-gray" key={idx}>
                      <Link
                        onClick={() => changeShowCategoriesMenu(false)}
                        to="dupa"
                        className="block p-3 ml-4 hover:underline"
                      >
                        {thirdDepthdCategory.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
