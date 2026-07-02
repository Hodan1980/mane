export type Office = {
  city: string;
  country: string;
  type: "Headquarters" | "Office" | "Partnering Office";
  address: string[];
  phone?: string;
  email?: string;
};

export const OFFICES: Office[] = [
  {
    city: "Sofia",
    country: "Bulgaria",
    type: "Headquarters",
    address: ["98 Gotze Delchev Blvd.", "1404 Sofia, Bulgaria"],
    phone: "+359 2 858 33 11",
    email: "office@manecapital.com",
  },
  {
    city: "Athens",
    country: "Greece",
    type: "Office",
    address: ["13, Dim. Soutsou St", "Mavili Square", "115 21 Athens, Greece"],
  },
  {
    city: "Geneva",
    country: "Switzerland",
    type: "Office",
    address: ["Rue des Voisins 4", "1205 Geneva, Switzerland"],
    phone: "+41 22 575 67 89",
  },
  {
    city: "London",
    country: "United Kingdom",
    type: "Partnering Office",
    address: ["Regis House", "45 King William Street", "London EC4R 9AN"],
    phone: "+44 20 3102 6797",
  },
  {
    city: "Hong Kong",
    country: "Hong Kong SAR",
    type: "Partnering Office",
    address: ["Suite 1501, 15th Floor, Jardine House", "1 Connaught Place, Central", "Hong Kong"],
    phone: "+852 3523 6288",
  },
  {
    city: "Shanghai",
    country: "China",
    type: "Partnering Office",
    address: ["5F Somekh Building", "149 Yuan Ming Yuan Road", "Shanghai 200002, P.R. China"],
    phone: "+86 21 3210 3218",
  },
];
