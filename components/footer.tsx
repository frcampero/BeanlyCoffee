import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";


const dataFooter = [
    {
        id:1,
        name: "About us",
        link:"#"
    },
    {
        id:2,
        name: "Products",
        link:"#"
    },
    {
        id:3,
        name: "My account",
        link:"#"
    },
    {
        id:4,
        name: "Privacy Policy",
        link:"#"
    },
]

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:max-w-4xl md:max-w-6xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">Beanly</span>
            Coffee
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            {dataFooter.map((data)=> (
                <li key={data.id}>
                <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2025
            <Link href="/"> Beanly Coffee </Link>- All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
