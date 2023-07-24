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

export function OptionsMenu() {
  return (
    <>
      <div className="min-w-[120px] bg-white shadow-default">
        <div className="container-fluid">
          <div className="mr-[8px] flex flex-row flex-wrap">
            <nav className="max-w-full w-[260px] shadow-default relative flex content-center justify-center">
              <div className="flex align-center items-center text-orange font-semibold ">
                KATEGORIE
                {/* cn-heading */}
              </div>
              <div className="absolute top-full w-[260px] bg-body rounded-b-xl">
                {/* cn-window*/}
                <div className="bg-white min-h-[597px] ">
                  {/* cn-bar */}
                  <div>
                    {/* cn-shop cn current frontend */}
                    <ul className="m-[-10px_0_10px] p-[16px_0_8px] [&>li]:p-1 text-left  [&>li]:font-semibold text-[14px] [&>li>span]:p-[8px_40px_8px_16px] [&>li]:mt-[8px]">
                      {/* categories
                      cn current deparments cn level */}
                      <li>
                        <span>Lapotpty</span>
                      </li>
                      <li>
                        <span>Lapotpty</span>
                      </li>
                      <li>
                        <span>Lapotpty</span>
                      </li>
                      <li>
                        <span>Lapotpty</span>
                      </li>
                      <li>
                        <span>Lapotpty</span>
                      </li>
                      <li>
                        <span>Lapotpty</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav className="w-100 min-w-[400px] flex-[1_1_calc(100%-280px)] w-[calc(100%-280%)]">
              <div className="pl-[10px] w-full justify-between items-end ">
                <div className="flex [&>div]:mr-[10px] [&>div]:p-[10px] [&>div]:cursor-pointer justify-between">
                  <div>ODBIERZ KOD RABATOWY</div>
                  <div>KONIFUGRATOR PC</div>
                  <div>OUTLET</div>
                  <div>PORADNIKI</div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
