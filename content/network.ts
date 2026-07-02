export type Partner = {
  name: string;
  region: string;
  coverage: string[];
};

export const NETWORK_INTRO = [
  "Our strong partnership network across Europe consists of investment banks and boutiques with more than 100 corporate finance professionals. We have access to local entrepreneurs and small and medium-sized businesses, as well as large corporations, throughout the countries in which we are active.",
];

export const NETWORK_STATEMENT =
  "Mane Capital covers most of Europe and China via exclusive and preferred partnerships with leading investment banking franchises.";

export const PARTNERS: Partner[] = [
  {
    name: "#1 Belgian Investment Bank",
    region: "Benelux & Central Europe",
    coverage: ["Belgium", "Czech Republic & Slovakia", "Hungary", "Poland"],
  },
  {
    name: "UK Mid & Small Cap Broker",
    region: "United Kingdom",
    coverage: ["Research", "Trading & Execution", "Corporate Advisory", "Listing Agent"],
  },
  {
    name: "Leading Hong Kong Advisor",
    region: "Greater China & Southeast Asia",
    coverage: ["Hong Kong", "Beijing", "Shanghai", "Singapore"],
  },
];
