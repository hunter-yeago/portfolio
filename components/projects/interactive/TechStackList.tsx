import { TechLink } from "@/types/types";
import LinkList from "./LinkList";
import React from "react";

interface Props {
  items: TechLink[];
  useLinks: boolean;
}

function groupByCategory(items: TechLink[]) {
  const CATEGORY_ORDER = ["Frontend", "Backend", "Infrastructure", "Data"];
  const result: Record<string, TechLink[]> = {};

  for (const item of items) {
    const category = item.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(item);
  }

  // Return only the categories that exist, in the specified order
  const orderedResult: Record<string, TechLink[]> = {};
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
    <div className="flex gap-x-10 gap-y-4 flex-wrap items-around h-full">
      {Object.entries(groupedItems).map(([category, categoryItems]) => {
        const TechLink = categoryItems.map((item) => ({
          name: item.name,
          url: useLinks ? item.url : undefined,
          icon: item.icon,
          tooltip: item.tooltip,
          category: item.category,
        }));

        return (
          <React.Fragment key={category}>
            <LinkList items={TechLink} showTooltips={true} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
