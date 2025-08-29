import { TechLink } from "@/types/types";
import LinkItem from "./LinkItem";

export interface Props {
  items: TechLink[];
  showTooltips?: boolean;
}

export default function LinkList({ items, showTooltips = false }: Props) {
  return (
    <>
      <h2 className="text-xl mb-1 font-bold">{items[0].category}</h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li
            key={item.key || `${item.name}-${index}`}
            className={showTooltips ? "tooltip list-none relative group" : undefined}
            title={showTooltips ? item.name : undefined}
          >
            <LinkItem
              category={item.category}
              name={item.name}
              url={item.url}
              icon={item.icon}
              disabled={item.disabled}
            />
            {showTooltips && item.tooltip && (
              <span className="tooltiptext absolute left-1/2 -translate-x-1/2 mt-1 w-max px-2 py-1 text-sm text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                {item.tooltip}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
