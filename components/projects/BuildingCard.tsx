import React from "react";

interface Building {
  PropertyName: string;
  PrimaryPropertyType: string;
  GHGIntensity: number;
  TotalGHGEmissions: number;
  AvgPercentileLetterGrade: string;
  NaturalGasUse: number;
  DistrictSteamUse: number;
}

interface BuildingImage {
  imgUrl: string;
}

interface Props {
  building: Building;
  path: string;
  buildingImg?: BuildingImage | null;
}

export function BuildingCard({ building, path, buildingImg }: Props) {
  const fullyGasFree = building.NaturalGasUse === 0 && building.DistrictSteamUse === 0;

  return (
    <article
      className="block w-80 rounded-md shadow-md overflow-hidden border border-gray-200 hover:outline outline-2 outline-blue-600 text-gray-900 no-underline"
      tabIndex={-1}
    >
      <div className="relative h-60 bg-gradient-to-br from-pink-200 to-blue-200">
        {fullyGasFree && (
          <div className="absolute top-2 right-2 bg-yellow-200 text-yellow-800 font-bold text-sm px-3 py-1 rounded-full shadow">⚡ All Electric</div>
        )}

        {/* OwnerLogo would go here if you have a React version */}

        {buildingImg && <img src={buildingImg.imgUrl} alt="" className="w-full h-full object-cover object-[50%_10%]" />}
      </div>

      <div className="p-4">
        <a
          href={path}
          className="text-lg font-semibold block truncate hover:underline"
          target="_blank"
          aria-label={`${building.PropertyName} page on Electrify Chicago - opens in a new tab`}
        >
          {building.PropertyName}
        </a>
        <div className="text-sm font-bold text-gray-500 mb-2">{building.PrimaryPropertyType}</div>

        <div className="flex justify-between text-sm">
          <dl className="space-y-1">
            <div>
              <dt className="font-bold">GHG Intensity</dt>
              <dd className="font-bold">
                {parseFloat(building.GHGIntensity.toString()).toLocaleString()}
                <span className="text-xs text-gray-500"> kg CO₂ / sqft</span>
              </dd>
            </div>
            <div>
              <dt className="font-bold">Total Emissions</dt>
              <dd className="font-bold">
                {parseInt(building.TotalGHGEmissions.toString()).toLocaleString()}
                <span className="text-xs text-gray-500"> tons CO₂e</span>
              </dd>
            </div>
          </dl>

          <div className="text-center text-xs text-gray-500 font-bold ml-4">
            <div className={`text-4xl leading-tight grade-${building.AvgPercentileLetterGrade}`}>{building.AvgPercentileLetterGrade}</div>
            <div>Overall Grade</div>
          </div>
        </div>
      </div>
    </article>
  );
}
