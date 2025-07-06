import Image from "next/image";
import Link from "next/link";
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
  url: string;
  alt: string;
}

interface Props {
  building: Building;
  path: string;
  image?: BuildingImage | null;
  note: string;
}

export function BuildingCard({ building, note, path, image }: Props) {
  const fullyGasFree = building.NaturalGasUse === 0 && building.DistrictSteamUse === 0;

  return (
    <article className="block max-w-80 border my-4 ">
      {note && (
        <p className="w-full p-2">
          <span className="font-bold">{building.PropertyName}</span> - {note}
        </p>
      )}
      <Link
        className="border-gray-200  hover:outline outline-2 outline-blue-600"
        href={path}
        target="_blank"
        aria-label={`${building.PropertyName} page on Electrify Chicago - opens in a new tab`}
      >
        <div className="relative h-60 bg-gradient-to-br from-pink-200 to-blue-200">
          {fullyGasFree && (
            <div className="absolute top-2 right-2 bg-yellow-200 text-yellow-800 font-bold text-sm px-3 py-1 rounded-full shadow">⚡ All Electric</div>
          )}

          {image && <Image src={image.url} alt={image.alt} fill className="w-full h-full object-cover object-[50%_10%]" />}
        </div>

        <div className="p-4">
          <p className="text-lg font-semibold block truncate hover:underline">{building.PropertyName}</p>
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
      </Link>
    </article>
  );
}
