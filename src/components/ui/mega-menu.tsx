import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description?: string;
      icon?: React.ElementType;
      link?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex flex-row flex-nowrap items-center space-x-2 whitespace-nowrap ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link ? (
              <Link
                to={navItem.link}
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm font-semibold text-black/70 transition-colors duration-300 hover:text-black group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-gray-100"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </Link>
            ) : (
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm font-semibold text-black/70 transition-colors duration-300 hover:text-black group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 relative z-10 ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-gray-100"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-2 z-10">
                  <motion.div
                    className="w-max border border-gray-200 bg-white shadow-2xl p-4"
                    style={{
                      borderRadius: 16,
                    }}
                    layoutId="menu"
                  >
                    <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-sm font-bold capitalize text-[#7B5CF0]">
                            {sub.title}
                          </h3>
                          <ul className="space-y-6">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  {item.link ? (
                                    <Link
                                      to={item.link}
                                      className="flex items-start space-x-3 group"
                                    >
                                      {Icon && (
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-gray-100 bg-gray-50 text-black/60 transition-colors duration-300 group-hover:bg-[#FD4E02] group-hover:text-white">
                                          <Icon className="h-5 w-5 flex-none" />
                                        </div>
                                      )}
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-semibold text-black">
                                          {item.label}
                                        </p>
                                        {item.description && (
                                          <p className="shrink-0 text-xs text-black/60 transition-colors duration-300 group-hover:text-[#F20574]">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ) : (
                                    <a
                                      href="#"
                                      className="flex items-start space-x-3 group"
                                    >
                                      {Icon && (
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-gray-100 bg-gray-50 text-black/60 transition-colors duration-300 group-hover:bg-[#FD4E02] group-hover:text-white">
                                          <Icon className="h-5 w-5 flex-none" />
                                        </div>
                                      )}
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-semibold text-black">
                                          {item.label}
                                        </p>
                                        {item.description && (
                                          <p className="shrink-0 text-xs text-black/60 transition-colors duration-300 group-hover:text-[#F20574]">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </a>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
