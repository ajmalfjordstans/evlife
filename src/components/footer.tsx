import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = ["Product", "About", "Contact", "Blog"];
const SUB_LINKS = ["Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-10">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">

            COPYRIGHT &copy; {CURRENT_YEAR}  {" "}
            <a href="" target="_blank">
              EV LIFE
            </a>{" "}
            - ALL RIGHTS RESERVED.
          </Typography>

          <ul className="flex items-center">
            {SUB_LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={link.toLowerCase()}
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                    }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography className="text-center font-normal !text-gray-700">
            POWERED BY FJORDSTANS PVT LTD
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
