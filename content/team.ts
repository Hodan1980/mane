import type { StaticImageData } from "next/image";
import ilianPhoto from "@/public/images/team/ilian-scarlatov.png";
import svetoslavPhoto from "@/public/images/team/svetoslav-tassev.png";
import filipPhoto from "@/public/images/team/filip-mutafis.jpg";
import teodoraPhoto from "@/public/images/team/teodora-gerdjikova.jpg";
import krasimirPhoto from "@/public/images/team/krasimir-gyurov.jpg";

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
    photo: filipPhoto,
    bio: [
      "Filip joined Mane Capital as Partner in 2023, bringing entrepreneurial experience from the fintech and technology sectors. He is CEO and one of the founders of Paysera Bulgaria, a fintech company for payment services, and a co-founder of Balkan Services, a business software consultancy.",
      "Filip is also among the founders of the Bulgarian Fintech Association, where he serves as a member of the Board.",
    ],
    education: ["Technical University of Sofia"],
  },
  {
    name: "Teodora Gerdjikova",
    initials: "TG",
    role: "Partner",
    photo: teodoraPhoto,
    bio: [
      "Teodora brings experience from high-growth technology companies and the public markets. She serves on the Board of Directors of Dronamics Capital, the Bulgarian Stock Exchange-listed investment vehicle of cargo-drone developer Dronamics.",
      "Earlier in her career she worked on Uber's expansion across Southeast Europe.",
    ],
    education: ["McGill University"],
  },
  {
    name: "Krasimir Gyurov",
    initials: "KG",
    role: "Partner",
    photo: krasimirPhoto,
    bio: ["Krasimir is a Partner at Mane Capital."],
    education: [],
  },
];
