"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link
                  href="/"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#EBDACB] to-white p-6 no-underline outline-none focus:shadow-md"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Beanly Coffee
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Immerse yourself in the exciting world of coffee...
                  </p>
                </Link>
              </li>
              <ListItem href="/" title="Shop">
                Access all your information, orders, and more.
              </ListItem>
              <ListItem href="/" title="Offers">
                Selection dedicated to promotions and special discounts.
              </ListItem>
              <ListItem href="/" title="Accessories">
                Complementary products such as cups, grinders, presses, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">
            Coffee
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/accesorios" className={navigationMenuTriggerStyle()}>
            Accessories
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Coffee Bean",
    href: "/category/grano",
    description: "Whole coffee beans that require grinding before brewing.",
  },
  {
    title: "Ground Coffee",
    href: "/category/molido",
    description:
      "Coffee in powder form ready to be used in different preparation methods.",
  },
  {
    title: "Capsule Coffee",
    href: "/category/capsula",
    description:
      "Coffee packaged in individual capsules, offering convenience and consistency in preparation.",
  },
];

export default MenuList;

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EBDACB]",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";
