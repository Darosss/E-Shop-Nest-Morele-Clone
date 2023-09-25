import { Category } from "../interfaces";
import { Link } from "react-router-dom";

export function CategoryMenu({
  subcategories,
  className = "",
  parentUrl,
}: {
  subcategories?: Category[];
  className?: string;
  parentUrl: string;
}) {
  return (
    <>
      <div
        className={`hidden rounded border-[2px] border-orange bg-body absolute left-[260px] min-h-[100%] p-[32px] top-0 z-1 right-0 ${className} `}
      >
        <div className="flex justify-between">
          {subcategories?.map((category, idx) => (
            <ul key={idx} className="font-normal">
              <li className="font-semibold">
                <Link
                  to={`${parentUrl}/${category.name}`}
                  className="hover:underline"
                >
                  {category.name}
                </Link>
              </li>
              {category.subcategories?.map(({ name }, thidIdx) => (
                <li key={thidIdx}>
                  <Link
                    to={`${parentUrl}/${category.name}/${name}`}
                    className="hover:underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
