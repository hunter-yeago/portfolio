import { LinkData } from "@/types/types";
import LinkList from "./LinkList";

interface Props {
  items: LinkData[];
  useLinks: boolean;
}

function groupByCategory(items: LinkData[]) {
  const CATEGORY_ORDER = ["Frontend", "Backend", "Data", "Infrastructure"];
  const result: Record<string, LinkData[]> = {};

  for (const item of items) {
    const category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
  }

  // Return only the categories that exist, in the specified order
  const orderedResult: Record<string, LinkData[]> = {};
  for (const category of CATEGORY_ORDER) {
    if (result[category]) {
      orderedResult[category] = result[category];
    }
  }

  // Add any categories not in CATEGORY_ORDER at the end
  for (const category in result) {
    if (!CATEGORY_ORDER.includes(category)) {
      orderedResult[category] = result[category];
    }
  }

  return orderedResult;
}

export default function TechStackList({ items, useLinks }: Props) {
  const groupedItems = groupByCategory(items);

  return (
    <div className="flex gap-x-10 gap-y-4 flex-wrap">
      {Object.entries(groupedItems).map(([category, categoryItems]) => {
        const linkData = categoryItems.map((item) => ({
          name: item.name,
          url: useLinks ? item.url : undefined,
          icon: item.icon,
          tooltip: item.tooltip,
          category: item.category,
        }));

        return (
          <div key={category}>
            <h3 className="text-xl font-semibold text-primary-300 mt-4 mb-2 capitalize">{category}</h3>
            <LinkList items={linkData} showTooltips={true} className="text-lg text-white" />
          </div>
        );
      })}
    </div>
  );
}
