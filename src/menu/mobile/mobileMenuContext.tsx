import React, { createContext, useState } from "react";

interface MobileContextType {
  showCategoriesMenu: boolean;
  changeShowCategoriesMenu: (value: boolean) => void;
  showSubCategories: boolean;
  changeShowSubCategories: (value: boolean) => void;
  showMoreMenu: boolean;
  changeShowMoreMenu: (value: boolean) => void;
}

export const MobilleMenuContext = createContext<MobileContextType>({
  showCategoriesMenu: false,
  changeShowCategoriesMenu: () => {},
  showSubCategories: false,
  changeShowSubCategories: () => {},
  showMoreMenu: false,
  changeShowMoreMenu: () => {},
});

export const MobilleMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showSubCategories, setShowSubcategories] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const changeShowCategoriesMenu = (value: boolean) =>
    setShowCategoriesMenu(value);

  const changeShowSubCategories = (value: boolean) =>
    setShowSubcategories(value);

  const changeShowMoreMenu = (value: boolean) => setShowMoreMenu(value);

  return (
    <MobilleMenuContext.Provider
      value={{
        showCategoriesMenu,
        changeShowCategoriesMenu,
        showSubCategories,
        changeShowSubCategories,
        showMoreMenu,
        changeShowMoreMenu,
      }}
    >
      {children}
    </MobilleMenuContext.Provider>
  );
};
