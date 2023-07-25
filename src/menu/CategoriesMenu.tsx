import { Category } from "../interfaces";

export function CategoriesMenu() {
  return (
    <>
      <div className="min-w-[120px] bg-white shadow-default">
        <div className="container-fluid">
          <div className="mr-[8px] flex flex-wrap relative">
            <nav className="max-w-full w-[260px] shadow-default flex content-center justify-center ">
              <div className="flex align-center items-center text-orange font-semibold">
                KATEGORIE
                {/* cn-heading */}
              </div>
              <div className="absolute top-full rounded-b-xl min-h-[597px] left-0 right-0">
                {/* cn-window*/}
                <div className="bg-body w-[260px] min-h-[597px] ">
                  {/* cn-bar */}
                  <div>
                    {/* cn-shop cn current frontend */}
                    <ul className="m-[-10px_0_10px] p-[16px_0_8px] [&>li]:p-1 text-left [&>li]:font-semibold text-[14px] [&>li>span]:p-[8px_40px_8px_16px] [&>li]:mt-[8px] ">
                      {/* categories
                      cn current deparments cn level */}
                      <li>
                        <span>link</span>
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

function CategoryMenu({
  subcategories,
  className = "",
}: {
  subcategories?: Category[];
  className?: string;
}) {
  return (
    <>
      <div
        className={`hidden rounded border-[2px] border-orange bg-body absolute left-[260px] min-h-[100%] p-[32px] top-0 z-1 right-0 ${className}`}
      >
        {/* cn-shop-window cn-level */}
        <div className="flex justify-between">
          {/* cn rows */}
          {subcategories?.map((category) => (
            <ul>
              <li>{category.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

/*
 .cn-shop-window {
  background:#fff;
  border:2px solid #ff503c;
  border-radius:8px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,.1);
  display:none;
  left:400px;
  min-height:100%;
  padding:32px;
  pointer-events:auto;
  position:absolute;
  right:0;
  top:0;
  z-index:-1
 } 
*/
