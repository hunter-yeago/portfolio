import { TechStackItem } from "@/types/types";
import techIcons from "@/utils/techIcons";
import Link from "next/link";

interface Props {
  items: TechStackItem[];
  useLinks: boolean;
}

function groupByCategory(items: TechStackItem[]) {
  return items.reduce<Record<string, TechStackItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

const CATEGORY_ORDER = ["Frontend", "Backend", "Data", "Infrastructure"];

export default function TechStackList({ items, useLinks }: Props) {
  const groupedItems = groupByCategory(items);

  return (
    <div className="flex gap-x-10 gap-y-4 flex-wrap">
      {CATEGORY_ORDER.map((category) => {
        const categoryItems = groupedItems[category];
        if (!categoryItems) return null;

        return (
          <div key={category}>
            <h3 className="text-xl font-semibold text-primary-300 mb-2 capitalize">{category}</h3>
            <ul className="flex flex-wrap gap-2 text-lg text-white">
              {categoryItems.map((item, index) => {
                const icon = techIcons[item.key];

                return (
                  <li className="tooltip relative group" key={`${item.key}-${index}`} title={item.name}>
                    {useLinks ? (
                      <Link
                        className="flex justify-center items-center gap-2 bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 transition"
                        href={item.url}
                        target="_blank"
                        aria-label={`${item.name} - opens in a new tab`}
                      >
                        <span>{item.name}</span>
                        {icon && <span className="text-lg">{icon}</span>}
                      </Link>
                    ) : (
                      <div className="flex justify-center items-center gap-2 bg-gray-800 px-2 py-1 rounded">
                        <span>{item.name}</span>
                        {icon && <span className="text-lg">{icon}</span>}
                      </div>
                    )}

                    <span className="tooltiptext absolute left-1/2 -translate-x-1/2 mt-1 w-max px-2 py-1 text-sm text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                      {item.tooltip}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
