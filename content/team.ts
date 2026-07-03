import type { StaticImageData } from "next/image";
import ilianPhoto from "@/public/images/team/ilian-scarlatov.png";
import vesselinPhoto from "@/public/images/team/vesselin-zahariev.png";
import svetoslavPhoto from "@/public/images/team/svetoslav-tassev.png";

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string[];
  education: string[];
  /** B&W head-and-shoulders portrait; members without one fall back to initials */
  photo?: StaticImageData;
};

export const TEAM: TeamMember[] = [
  {
    name: "Ilian Scarlatov",
    initials: "IS",
    role: "Managing Partner",
    photo: ilianPhoto,
    bio: [
      "Ilian has more than a decade of experience in international investment banking. He established the Bulgarian office of KBC Securities in 2008 and served as its CEO until 2013. Prior to that, he was Managing Partner at Sofia International Securities.",
      "Over the years Ilian has structured landmark capital markets projects, including dual listings and the first warrants issue in Bulgaria.",
    ],
    education: [
      "BA in Business Administration, Thames Valley University, London",
      "BA in Information Technologies, Athens University of Economics and Business",
    ],
  },
  {
    name: "Vesselin Zahariev",
    initials: "VZ",
    role: "Partner",
    photo: vesselinPhoto,
    bio: [
      "Vesselin has 10 years of international corporate finance experience. He led the corporate finance practice of KBC Securities in Bulgaria between 2009 and 2013 and, before that, of Sofia International Securities.",
      "His track record includes M&A transactions such as the acquisition of DZI by KBC Group and the sale of Orbitel by Magyar Telekom.",
    ],
    education: ["MSc in Economics"],
  },
  {
    name: "Svetoslav Tassev",
    initials: "ST",
    role: "Partner",
    photo: svetoslavPhoto,
    bio: [
      "Svetoslav joined Mane Capital in 2017, bringing more than 11 years of capital markets experience across buy-side and sell-side mandates. He advised York Capital Management on the acquisition of a significant stake in Bulgartabac Holding.",
      "His sector expertise spans renewables, tobacco, agriculture and finance, with extensive investor relations experience across Asia, the Middle East and Europe. He previously served as Chief Equity Analyst and Macro Economist at KBC Securities Bulgaria.",
    ],
    education: ["MSc in Operations Research, Pace University, New York"],
  },
  {
    name: "Filip Mutafis",
    initials: "FM",
    role: "Partner",
    bio: ["Filip joined Mane Capital as Partner in 2023."],
    education: [],
  },
];
