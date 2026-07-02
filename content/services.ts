export type SubService = {
  name: string;
  description: string;
  points?: string[];
};

export type ServiceGroup = {
  id: string;
  index: string;
  title: string;
  intro: string;
  items: SubService[];
};

export const SERVICES: ServiceGroup[] = [
  {
    id: "mergers-acquisitions",
    index: "01",
    title: "Mergers & Acquisitions",
    intro:
      "We advise public and private companies in Bulgaria, Central and Eastern Europe and Western Europe throughout every stage of a transaction — combining a global network with deep local expertise.",
    items: [
      {
        name: "Mergers",
        description:
          "There comes a time when your company joins forces with another to achieve operating advantages and increase shareholders' wealth — realising economies of scale, improving efficiency, expanding into foreign markets, acquiring new technologies or diversifying the business. We help you identify the right strategic partner and see the combination through to completion.",
      },
      {
        name: "Acquisitions",
        description:
          "The acquisition of a competitor or the diversification of business lines are inevitable steps in every company's corporate life. We support our clients throughout the entire transaction with buy-side and sell-side advisory, fairness opinions and valuation.",
        points: [
          "Long-standing experience in Bulgaria and CEE",
          "Proficiency built on numerous M&A transactions",
          "Expertise across multiple sectors",
        ],
      },
      {
        name: "Disposals",
        description:
          "For companies refocusing on their core business — or shareholders seeking an exit — we provide sell-side advisory, fairness opinions and valuation, managing a competitive and discreet process from preparation through closing.",
      },
    ],
  },
  {
    id: "capital-markets",
    index: "02",
    title: "Capital Markets",
    intro:
      "From initial public offerings to bond issues and bespoke hybrid instruments, we structure, market and execute capital markets transactions that fund our clients' growth.",
    items: [
      {
        name: "Equity Capital Markets",
        description:
          "Access to capital is a critical part of every company's business strategy. We raise equity from institutional investors and the public — delivering a larger equity base, access to capital, market exposure and prestige.",
      },
      {
        name: "Debt Capital Markets",
        description:
          "Debt financing is an indispensable part of your company's optimal capital structure. We focus on the structuring, marketing and execution of debt capital deals tailored to your strategy and balance sheet.",
      },
      {
        name: "Hybrid Instruments & Derivatives",
        description:
          "We structure preferred shares, convertible bonds and warrants — and pride ourselves on being pioneers in introducing warrants on the Bulgarian capital market.",
      },
    ],
  },
  {
    id: "financial-services",
    index: "03",
    title: "Financial Services",
    intro:
      "Beyond transactions, we act as a long-term strategic partner to owners, boards and management teams.",
    items: [
      {
        name: "Strategic Advice",
        description:
          "Independent counsel on corporate strategy, growth capital, market entry and shareholder matters — at the right moment, with the right solution.",
      },
      {
        name: "Valuation & Fairness Opinion",
        description:
          "Rigorous, defensible valuations and fairness opinions for transactions, regulatory purposes and board decisions.",
      },
      {
        name: "Restructuring",
        description:
          "Financial restructuring and debt or equity solutions that restore balance-sheet strength and unlock access to growth capital.",
      },
      {
        name: "Financial Research",
        description:
          "Company and sector research that gives investors and corporates a clear, informed view of the market.",
      },
    ],
  },
];
