import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const NAV_MENU = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Product",
    href: "/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={true} fullWidth className="border-0 sticky top-0 z-50">

      <div className="container mx-auto flex items-center justify-between max-h-[40px] ">
        <ul className="hidden items-center justify-between lg:flex w-full ">
          {/* {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))} */}
          <Typography
            as="a"
            href="/"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            Home
          </Typography>
          <Typography
            as="a"
            href="/products"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            Product
          </Typography>
          <Typography
            as="a"
            href="/about"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            About
          </Typography>
          <a href="/" className="cursor-pointer">
            <Image
              src="/logos/logo-ev-life.png"
              alt=""
              className=""
              height={50}
              width={100}
            />
          </a>
          <Typography
            as="a"
            href="/contact"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            Contact
          </Typography>
          <Typography
            as="a"
            href="/blog"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            Blog
          </Typography>
          <Typography
            as="a"
            href="/partner"
            target={"_self"}
            variant="paragraph"
            color="gray"
            className="flex items-center gap-2 font-medium text-gray-900 font-nunito"
          >
            Partner
          </Typography>
        </ul>
        <a href="/" className="cursor-pointer lg:hidden">
          <Image
            src="/logos/logo-ev-life.png"
            alt=""
            className=""
            height={50}
            width={100}
          />
        </a>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {/* <Icon className="h-5 w-5" /> */}
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
