const graphs = [
  {
    title: "Chicago Median GHG Emissions",
    key: "TotalGHGEmissions",
    yAxisLabel: "metric tons CO2e",
    color: "#e74c3c", // Red for emissions
  },
  // {
  //   title: "Electricity Use",
  //   key: "ElectricityUse",
  //   yAxisLabel: "kWh",
  //   color: "#f39c12", // Orange for electricity
  // },
  // {
  //   title: "Natural Gas Usage",
  //   key: "NaturalGasUse",
  //   yAxisLabel: "therms",
  //   color: "#3498db", // Blue for gas
  // },
  // {
  //   title: "Water Consumption",
  //   key: "WaterUse",
  //   yAxisLabel: "gallons",
  //   color: "#27ae60", // Green for water
  // },
];

const baseData: any = {
  TotalGHGEmissions: [
    { year: 2018, value: 2450000 },
    { year: 2019, value: 2380000 },
    { year: 2020, value: 2100000 }, // COVID impact
    { year: 2021, value: 2250000 },
    { year: 2022, value: 2180000 },
    { year: 2023, value: 2050000 },
    { year: 2024, value: 1980000 },
  ],
  // ElectricityUse: [
  //   { year: 2018, value: 15800000 },
  //   { year: 2019, value: 16200000 },
  //   { year: 2020, value: 14500000 }, // COVID impact
  //   { year: 2021, value: 15900000 },
  //   { year: 2022, value: 16100000 },
  //   { year: 2023, value: 15700000 },
  //   { year: 2024, value: 15400000 },
  // ],
  // NaturalGasUse: [
  //   { year: 2018, value: 8900000 },
  //   { year: 2019, value: 9200000 },
  //   { year: 2020, value: 9500000 }, // More home usage
  //   { year: 2021, value: 9100000 },
  //   { year: 2022, value: 8800000 },
  //   { year: 2023, value: 8500000 },
  //   { year: 2024, value: 8200000 },
  // ],
  // WaterUse: [
  //   { year: 2018, value: 450000 },
  //   { year: 2019, value: 465000 },
  //   { year: 2020, value: 480000 },
  //   { year: 2021, value: 470000 },
  //   { year: 2022, value: 455000 },
  //   { year: 2023, value: 445000 },
  //   { year: 2024, value: 440000 },
  // ],
};

const links = [
  {
    id: "LinkedIn",
    href: "https://www.linkedin.com/in/hunter-yeago/",
    bgClass: "bg-gray-800",
    hoverClass: "focus:bg-gray-700 hover:bg-gray-700",
  },
  {
    id: "Resume",
    href: "/resume/resume.pdf",
    bgClass: "bg-[#aa8af7]",
    hoverClass: "focus:bg-[#b79cf8] hover:bg-[#b79cf8]", // lighter lavender
  },
  // {
  //   id: "GitHub",
  //   href: "https://github.com/hunter-yeago",
  //   bgClass: "bg-[#e74c3c]",
  //   hoverClass: "focus:bg-[#ef6d5c] hover:bg-[#ef6d5c]", // lighter red
  // },
];
