import { TechStackItem } from "@/app/types/types";
import techIcons from "@/app/utils/techIcons";

interface Props {
  items: TechStackItem[];
}

export default function TechStackList({ items }: Props) {
  return (
    <ul className="flex flex-wrap gap-2 text-lg text-white mt-auto">
      {items.map((item, index) => {
        const icon = techIcons[item.key];

        return (
          <li key={`${item.key}-${index}`} className="bg-gray-800 px-2 py-1 rounded flex items-center gap-2">
            <span>{item.name}</span>
            {icon && <span className="text-lg">{icon}</span>}
          </li>
        );
      })}
    </ul>
  );
}
