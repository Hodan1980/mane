export type NewsItem = {
  /** Display date, DD.MM.YYYY (omitted when the original article carries no date) */
  date?: string;
  year: number;
  title: string;
  summary?: string;
};

export const ANNOUNCEMENTS: NewsItem[] = [
  {
    year: 2023,
    title: "Документ за допускане до търговия на АмонРа Енерджи АД",
    summary: "Admission document for the listing of AmonRa Energy AD.",
  },
  {
    year: 2022,
    title:
      "Съобщение за първично публично предлагане на акции от увеличението на капитала на „Син Карс Индъстри“ АД",
    summary:
      "Announcement of the initial public offering of shares from the capital increase of Sin Cars Industry AD, with the terms and conditions for investors.",
  },
  {
    date: "12.08.2022",
    year: 2022,
    title: "Син Карс Индъстри АД — увеличение на капитала",
    summary:
      "Sin Cars Industry AD announces a capital increase approved by its Board of Directors.",
  },
];

export const NEWS: NewsItem[] = [
  {
    date: "22.02.2018",
    year: 2018,
    title: "CEZ set to sell Bulgarian distribution, renewable assets",
    summary:
      "CEZ approved the sale of its remaining assets in Bulgaria to Inercom Bulgaria, including the energy distributor serving more than 3 million people in western Bulgaria.",
  },
  {
    date: "22.02.2018",
    year: 2018,
    title: "CEZ продава активите си в България на „Инерком“",
    summary: "Bulgarian-language coverage of the CEZ asset sale — a package of seven companies.",
  },
  {
    date: "27.07.2017",
    year: 2017,
    title: "FSC officially approved the Tender Offer for Bulstrad Vienna Insurance Group",
    summary:
      "The Financial Supervision Commission approved the tender offer targeting 19,559 shares of the insurer.",
  },
  {
    date: "15.05.2017",
    year: 2017,
    title: "Tomorrow's smart city begins in South European country",
    summary:
      "A high-tech city development near Bulgaria's capital, part of the Belt and Road cooperation programme with China.",
  },
  {
    date: "03.10.2016",
    year: 2016,
    title: "Ilian Scarlatov: There are serious fundamentals behind the rise of BSE",
    summary:
      "The first exchange-traded fund based on SOFIX marked a momentous week for the Bulgarian Stock Exchange.",
  },
  {
    date: "28.06.2016",
    year: 2016,
    title: "Sofia Commerce – Pawn Shops AD issues preferred shares with a 12% fixed annual dividend",
    summary:
      "Up to BGN 5.5 million in preferred shares with a guaranteed 12% annual dividend and five-year maturity.",
  },
  {
    year: 2016,
    title: "How to participate in the preferred shares public offering of Sofia Commerce – Pawn Shops AD?",
    summary:
      "Subscription period 27 June – 12 July 2016, with the required documents and intermediary details.",
  },
  {
    date: "20.06.2016",
    year: 2016,
    title: "Sofia Commerce – Pawn Shops AD issues 1.11m preferred shares",
    summary: "1.11 million preferred shares planned, nominal value BGN 1.00 and issue value BGN 5.00.",
  },
  {
    date: "12.01.2016",
    year: 2016,
    title: "Sofia Commerce plans to issue up to 5m new preferred shares",
    summary:
      "A new preferred-share issuance following the completion of the previous dividend cycle.",
  },
  {
    date: "04.06.2015",
    year: 2015,
    title: "Ilian Scarlatov in the studio of Investbook, Bulgaria On Air",
    summary:
      "Commentary on Welcome Holdings' St. Sofia tourism project and the warrants-based capital raising.",
  },
  {
    date: "29.05.2015",
    year: 2015,
    title: "The long road of Musachevo towards Macao",
    summary:
      "The Saint Sofia project: 1.3 million square metres and an investment of EUR 1.5 billion.",
  },
  {
    date: "24.05.2015",
    year: 2015,
    title: "Is the Bulgarian capital market attractive for SMEs? | Bulgaria On-Air",
    summary: "Smart Organic announces its listing on the BSE, structured by Mane Capital.",
  },
  {
    date: "20.05.2015",
    year: 2015,
    title: "Yani Dragov: We want Smart Organic to raise BGN 3m from the Bulgarian Stock Exchange",
    summary: "Smart Organic targets BGN 3 million to fund expansion and exports to the US.",
  },
  {
    date: "18.05.2015",
    year: 2015,
    title: "Welcome Holdings AD issues up to 1.375bn warrants",
    summary: "1.375 billion warrants issued, with a total value of BGN 1,375,000.",
  },
  {
    date: "13.05.2015",
    year: 2015,
    title: "Ilian Scarlatov: Why the money on the Capital Markets doesn't “talk”? | The Sound of Money",
    summary: "“I am an optimist, because I believe that we can succeed.”",
  },
  {
    date: "12.05.2015",
    year: 2015,
    title:
      "Vesselin Zahariev: There are many investors but they want a good regulatory framework",
    summary:
      "On financing mechanisms in the water supply and sanitation sector: $20–40bn waiting to be invested annually.",
  },
  {
    date: "12.05.2015",
    year: 2015,
    title: "Roobar announced its upcoming IPO | Sound of Money",
    summary: "The Smart Organic / Roobar snacks company announces its IPO and international expansion.",
  },
  {
    date: "12.05.2015",
    year: 2015,
    title: "Yani Dragov: Bulgaria's strengths lay within the niche products | Sound of Money",
    summary: "Bulgaria's strong reputation in bio-agriculture and niche food production.",
  },
  {
    date: "12.05.2015",
    year: 2015,
    title: "Ilian Scarlatov: The crisis shows the dependency of the banks in Europe | Sound of Money",
    summary: "Capital markets emerge as an alternative to bank financing after the crisis.",
  },
  {
    date: "11.05.2015",
    year: 2015,
    title: "Bulgaria Most at Risk From Grexit, Morgan Stanley Says",
    summary:
      "Greek banks hold a significant share in Bulgaria, Romania and Serbia; Bulgaria identified as most exposed.",
  },
  {
    date: "15.04.2015",
    year: 2015,
    title: "Industrial Holding Bulgaria successfully issued bonds",
    summary:
      "Almost BGN 50 million raised from the public offering — 499,996 of 500,000 convertible bonds subscribed.",
  },
  {
    date: "15.04.2015",
    year: 2015,
    title: "Industrial Holding Bulgaria issued convertible bonds for BGN 50m",
    summary: "BGN 50 million in convertible bonds successfully issued, with a three-year term.",
  },
  {
    date: "07.04.2015",
    year: 2015,
    title: "Industrial Holding Bulgaria increased its capital after conversion of its matured bonds issue",
    summary: "A capital increase of BGN 9,422,100 (14%) after 31% of matured bonds were converted.",
  },
  {
    date: "20.02.2015",
    year: 2015,
    title: "Industrial Holding Bulgaria will issue bonds for BGN 50m",
    summary: "Proceeds earmarked for refinancing existing debt and new investments.",
  },
  {
    date: "19.02.2015",
    year: 2015,
    title: "Gimel competes with the largest Bio producers in Europe",
    summary:
      "The Bulgarian bio fruits and vegetables producer, founded in 1995, exports 80% of its production.",
  },
  {
    date: "22.01.2015",
    year: 2015,
    title: "The sweet growth of Roobar",
    summary: "How a Bulgarian energy-bar producer expanded into international markets.",
  },
  {
    date: "05.11.2014",
    year: 2014,
    title: "The cost for execution of the warrants of Pig Farm – Nikolovo falls by 17%",
    summary:
      "Warrant exercise cost reduced from BGN 3.00 to BGN 2.50; capital increase from BGN 2.625m to BGN 3.5m.",
  },
  {
    date: "06.10.2014",
    year: 2014,
    title: "The golf field of Krasimir Gergov would have a new owner by the end of the year",
    summary: "Golf Club St. Sofia set to be acquired by Bulgaria Development Holding Ltd.",
  },
  {
    date: "02.09.2014",
    year: 2014,
    title: "The entertainment city project near Musachevo would be traded on the BSE",
    summary:
      "Bulgaria Development Holdings plans a merger with Welcome Holdings, bringing the project to the Bulgarian Stock Exchange.",
  },
  {
    date: "24.04.2014",
    year: 2014,
    title: "EESF REIT acquired BGN 1.01m through capital increase",
    summary: "562,704 shares subscribed for BGN 1,012,867 at BGN 1.80 per share.",
  },
  {
    date: "16.04.2014",
    year: 2014,
    title: "Asian investors with a planned investment of EUR 1.5bn",
    summary:
      "A consortium of investors from China, Malaysia, Hong Kong and Singapore behind the St. Sofia tourism project.",
  },
  {
    date: "10.03.2014",
    year: 2014,
    title: "The Chinese investor Steven Lo acquired 95% of Welcome Holdings AD",
    summary: "Steven Kit Sing Lo acquired a 95% stake in the formerly Greek-owned company.",
  },
  {
    date: "06.03.2014",
    year: 2014,
    title: "SOFIX reached a new peak at 600 points",
    summary: "The index gained 1.5% in the session and 23.3% year-to-date.",
  },
  {
    date: "26.02.2014",
    year: 2014,
    title: "Pig Farm – Nikolovo AD successfully subscribed 2.6m warrants",
    summary:
      "BGN 1.1 million raised; warrant price BGN 0.41, four-year maturity, BGN 3.00 exercise price.",
  },
  {
    date: "20.02.2014",
    year: 2014,
    title:
      "Consortium “Kamburov – European Program – Mane Capital” will determine the fair value of the BSE and the Central Depository",
    summary:
      "The consortium won the auction to value 50.05% of BSE–Sofia and 43.7% of the Central Depository.",
  },
  {
    date: "28.01.2014",
    year: 2014,
    title: "Indexes advance, with losing stocks taking a big fall",
    summary: "SOFIX at 548.68 points; BGBX40 at 109.86; BGTR30 at 387.29; BGREIT at 90.20.",
  },
  {
    date: "24.01.2014",
    year: 2014,
    title: "The local indexes advance as international equities fall",
    summary:
      "Weak correlation between the Bulgarian Stock Exchange and international markets; SOFIX up 10% from the start of the year.",
  },
  {
    date: "14.01.2014",
    year: 2014,
    title: "Pig Farm – Nikolovo AD rights trading will start on 17th of January 2014",
    summary: "2.625 million warrants at BGN 0.41 per right, with a minimum 10% subscription requirement.",
  },
  {
    date: "10.01.2014",
    year: 2014,
    title: "Pig Farm – Nikolovo AD raising BGN 1m through a warrant issue on the BSE",
    summary: "Mane Capital manages the warrant issue on the Bulgarian Stock Exchange.",
  },
  {
    date: "08.01.2014",
    year: 2014,
    title: "The equity issue prospectus of Energetics and Energy Savings Fund (EESF) was approved",
    summary:
      "The FSC approved the prospectus for 15,565,688 shares at BGN 1.80 per share; Mane Capital manages the issue.",
  },
  {
    date: "07.01.2014",
    year: 2014,
    title: "Four candidates submitted proposals for valuation of the BSE and the Central Depository",
    summary: "Four proposals received by the 6 January 2014 deadline.",
  },
  {
    date: "18.12.2013",
    year: 2013,
    title:
      "The FSC approved the prospectus for the increase in the shareholders' equity of Pig Farm – Nikolovo AD",
    summary:
      "2,625,000 warrants at BGN 0.41 approved — the third warrant issue on the Bulgarian capital market.",
  },
  {
    date: "16.12.2013",
    year: 2013,
    title: "Sofia Commerce – Pawn Shops raised EUR 1.5m from its convertible bond issue",
    summary: "15,058 bonds subscribed at EUR 100.00 face value.",
  },
  {
    date: "21.10.2013",
    year: 2013,
    title: "Issue price of BGN 1.80 per share for the equity issue of EESF",
    summary: "15,565,688 shares to raise over BGN 28 million.",
  },
  {
    date: "11.10.2013",
    year: 2013,
    title: "The FSC approved the prospectus for Sofia Commerce – Pawn Shops convertible bond issue",
    summary:
      "Convertible bonds with EUR 100.00 face value, 36-month maturity and 12% annual yield.",
  },
  {
    date: "04.07.2013",
    year: 2013,
    title: "From the banks to the stock exchanges",
    summary: "On the shift from bank financing towards capital-markets funding.",
  },
  {
    date: "27.05.2013",
    year: 2013,
    title: "Westpark Financial Group acquired 96.4% of Pig Farm – Nikolovo AD",
  },
  {
    date: "14.05.2013",
    year: 2013,
    title: "We must improve the post-privatization control",
    summary: "Ilian Scarlatov on transparency and governance in post-privatisation Bulgaria.",
  },
  {
    date: "14.05.2013",
    year: 2013,
    title: "The Exchanges in the region are a total “outsider”",
    summary:
      "KBC Securities exits Bulgaria; Mane Capital is founded by the same team to continue its investment banking practice.",
  },
  {
    date: "14.05.2013",
    year: 2013,
    title: "Ilian Scarlatov: There has to be predictability and rules in Bulgaria",
  },
  {
    date: "27.02.2013",
    year: 2013,
    title: "Ilian Scarlatov: Bulgarian politics is the authority of the stock exchange at the moment",
    summary: "Significant upward movement expected on the BSE about a month after the elections.",
  },
  {
    date: "25.02.2013",
    year: 2013,
    title: "Sofia Commerce – Pawnshop AD plans to issue up to BGN 5 million in convertible bonds",
    summary: "12% annual yield and 36-month maturity, funding acquisitions and liquidity.",
  },
  {
    date: "22.01.2013",
    year: 2013,
    title: "What made Jim Rogers interested in investing in Bulgaria?",
    summary: "“Bulgaria seems to be the only country which shows potential among the Balkans.”",
  },
  {
    date: "04.01.2013",
    year: 2013,
    title: "Video — Deal of the Week: Boost in demand for high-return stocks",
    summary: "Video commentary by Ilian Scarlatov and Georgi Konstantinov.",
  },
  {
    date: "15.10.2012",
    year: 2012,
    title: "Video — INVESTBOOK: Capital Gains Tax?",
    summary: "With commentary by Ilian Scarlatov and Vasil Velev.",
  },
  {
    date: "24.07.2012",
    year: 2012,
    title: "Ilian Scarlatov for Bloomberg: Merkel's Right, Greece Should Act Like Bulgaria",
    summary: "On Angela Merkel citing Bulgaria as an example of fiscal responsibility.",
  },
  {
    date: "01.03.2012",
    year: 2012,
    title: "Video — INVESTBOOK: The effect of the “cheap” loans coming from the ECB",
    summary: "With commentary by Ilian Scarlatov and Ivan Takev.",
  },
  {
    date: "03.07.2009",
    year: 2009,
    title: "Video: Analysis of the Stock Exchange",
    summary: "Commentary by Ilian Scarlatov, CEO of KBC Securities Bulgaria.",
  },
];

/** News grouped by year, newest first. */
export function newsByYear(items: NewsItem[]): [number, NewsItem[]][] {
  const groups = new Map<number, NewsItem[]>();
  for (const item of items) {
    const list = groups.get(item.year) ?? [];
    list.push(item);
    groups.set(item.year, list);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
}
