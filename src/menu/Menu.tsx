import { SearchBar } from "../searchBar";

export function HeadMenu() {
  return (
    <>
      <div>
        <header className="min-w-[120px] py-[20px] bg-white shadow-default">
          <div className="container-fluid">
            <div className="ml-[-8px] mr-[8px] flex flex-row flex-wrap">
              <div className="max-w-full w-[280px] items-center flex pt-[2px] pl-[42px]">
                <h1>
                  <img src="/static/shop/logo/image-logo-morele.svg" />
                </h1>
              </div>
              <div className="flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)] flex items-center">
                <div className="w-[50%] flex-[0_0_50%]">
                  <SearchBar />
                </div>
                <div className="max-w-[680px] pl-[10px]">
                  <div className="flex items-center justify-between [&>div]:mr-[10px] [&>div]:p-[10px] [&>div]:cursor-pointer">
                    <div>kod pocztowy</div>
                    <div>kontakt</div>
                    <div> listy zakupowe</div>
                    <div> Zaloguj</div>
                    <div> koszyk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
