interface BuildingCardProps {
  name: string;
  grade?: string;
  electrified?: boolean;
  gasUsage?: string;
  failedReportYear?: number;
  emissions?: string;
  rank?: number;
}

export function BuildingCard({ name, grade, electrified, gasUsage, failedReportYear, emissions, rank }: BuildingCardProps) {
  return (
    <div className="border rounded-md p-4 my-4 shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <ul className="list-disc ml-5 text-sm text-gray-700">
        {grade && <li>Grade: {grade}</li>}
        {electrified && <li>Fully Electrified ✅</li>}
        {gasUsage && <li>Natural Gas Use: {gasUsage}</li>}
        {failedReportYear && <li>Failed to report in {failedReportYear}</li>}
        {emissions && <li>Emissions: {emissions} tons CO₂e</li>}
        {rank && <li>Ranked #{rank} in emissions</li>}
      </ul>
    </div>
  );
}
