import * as React from "react";
import MegaMenu from "./mega-menu";
import type { MegaMenuItem } from "./mega-menu";
import {
  Cpu,
  Globe,
  Eye,
  Shield,
  Rocket,
  Box,
  Search,
  Palette,
  BookOpen,
  FileText,
  Newspaper,
} from "lucide-react";

const MegaMenuDemo = () => {
  const NAV_ITEMS: MegaMenuItem[] = [
    {
      id: 1,
      label: "Services",
      subMenus: [
        {
          title: "Our Expertise",
          items: [
            { label: "Influencer Marketing", link: "/influencer-marketing" },
            { label: "Social Media Marketing", link: "/social-media-marketing" },
            { label: "Content Marketing", link: "/content-marketing" },
            { label: "Performance Marketing", link: "/performance-marketing" },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Creative",
      subMenus: [
        {
          title: "Our Creativity",
          items: [
            { label: "Branding", link: "/branding" },
            { label: "Creative Strategy", link: "#" },
            { label: "Design Services", link: "#" },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Company",
      subMenus: [
        {
          title: "Who We Are",
          items: [
            { label: "About Us", link: "/about" },
            { label: "Our Team", link: "/about#team" },
            { label: "Careers", link: "/about#careers" },
            { label: "Contact", link: "/#contact" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-row flex-nowrap items-center justify-center w-full">
      <MegaMenu items={NAV_ITEMS} />
    </div>
  );
};

export { MegaMenuDemo as DemoOne };
