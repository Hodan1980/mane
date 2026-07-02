export type Deal = {
  /** Deal type, e.g. "Convertible Bonds" */
  title: string;
  /** Amount or transaction detail, e.g. "EUR 20,000,000" */
  detail?: string;
  /** Client / issuer name (omit if confidential) */
  company?: string;
  /** Industry sector label */
  sector?: string;
  /** Mane Capital's role in the transaction */
  role: string;
  year?: string;
  confidential?: boolean;
};

export const CURRENT_PROJECTS: Deal[] = [
  {
    title: "Sell-side Advisory",
    sector: "Semiconductors",
    role: "Financial Advisor",
  },
  {
    title: "Secured Bond Issue",
    detail: "EUR 20,000,000",
    role: "Lead Manager",
  },
  {
    title: "Sell-side Advisory",
    sector: "Food & Beverage",
    role: "Financial Advisor",
    confidential: true,
  },
  {
    title: "Sell-side Advisory",
    sector: "Waste Management",
    role: "Financial Advisor",
    confidential: true,
  },
  {
    title: "M&A Advisory",
    role: "Financial Advisor",
  },
  {
    title: "Initial Public Offering",
    company: "Roobar",
    sector: "Food & Beverage",
    role: "Lead Manager",
  },
];

export const COMPLETED_PROJECTS: Deal[] = [
  {
    title: "Buy-side Advisory",
    detail: "Acquisition of CEZ Group's assets in Bulgaria",
    role: "Financial Advisor",
    year: "2019",
  },
  {
    title: "Sell-side Advisory",
    detail: "Minority stake",
    role: "Financial Advisor",
    year: "2019",
  },
  {
    title: "Convertible Bonds",
    detail: "BGN 18,828,800",
    company: "Zaharni Zavodi",
    role: "Lead Manager",
    year: "2018",
  },
  {
    title: "Tender Offer",
    detail: "Minority stake",
    company: "Bulstrad Vienna Insurance Group",
    role: "Lead Manager",
    year: "2017",
  },
  {
    title: "Acquisition of 30% Stake",
    role: "Financial Advisor",
    year: "2017",
  },
  {
    title: "Acquisition of Minority Stake",
    role: "Financial Advisor",
    year: "2017",
  },
  {
    title: "Preferred Shares",
    detail: "BGN 1,000,000",
    company: "Sofia Commerce–Pawn Shops",
    role: "Lead Manager",
    year: "2016",
  },
  {
    title: "Divestment of 33% Stake",
    role: "Financial Advisor",
    year: "2015",
  },
  {
    title: "Warrants Issue",
    detail: "1,375,000,000 warrants",
    company: "Welcome Holdings",
    role: "Lead Manager",
    year: "2015",
  },
  {
    title: "Convertible Bonds",
    detail: "BGN 50,000,000",
    company: "Industrial Holding Bulgaria",
    role: "Lead Manager",
    year: "2015",
  },
  {
    title: "Privatisation Valuation",
    detail: "BSE–Sofia (50.05%) & Central Depository (43.7%)",
    role: "Advisor",
    year: "2014",
  },
  {
    title: "Capital Raise",
    detail: "BGN 1,000,000",
    role: "Lead Manager",
    year: "2014",
  },
  {
    title: "Secondary Public Offering",
    role: "Lead Manager",
    year: "2014",
  },
  {
    title: "Acquisition of 95% Stake",
    company: "Welcome Holdings",
    role: "Financial Advisor",
    year: "2014",
  },
  {
    title: "IPO of Warrants",
    detail: "2,625,000 warrants",
    role: "Lead Manager",
    year: "2014",
  },
  {
    title: "Convertible Bonds",
    detail: "EUR 1,500,000",
    company: "Sofia Commerce–Pawn Shops",
    role: "Lead Manager",
    year: "2013",
  },
  {
    title: "Acquisition of 96% Stake",
    company: "Svinekomplex Nikolovo",
    role: "Financial Advisor",
    year: "2013",
  },
  {
    title: "Convertible Bonds",
    detail: "BGN 30,000,000",
    role: "Lead Manager",
    year: "2013",
  },
  {
    title: "Energy System Modelling",
    role: "Advisor",
    year: "2013",
  },
  {
    title: "Tender Offer",
    company: "BSE–Sofia",
    role: "Advisor",
    year: "2013",
  },
];
