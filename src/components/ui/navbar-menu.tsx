"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type MenuItemWithSubMenuProps = {
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
  children: React.ReactNode;
};

type MenuItemProps = {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
};

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

export function Menu({
  children,
  setActive
}: {
  children: React.ReactNode;
  setActive: (item: string | null) => void;
}) {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <motion.div className="flex space-x-4 px-8 py-4">{children}</motion.div>
    </nav>
  );
}

export function MenuItem({
  setActive,
  active,
  item,
  children
}: MenuItemProps) {
  return (
    <div className="relative group">
      <motion.button
        onMouseEnter={() => setActive(item)}
        className={cn(
          "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
          active === item ? "text-primary" : "text-foreground/90"
        )}
      >
        <span className="relative">
          {item}
          {active === item && (
            <motion.div
              layoutId="active"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </span>
      </motion.button>
      {active === item && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-80">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="bg-popover border rounded-lg shadow-lg p-4"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export function HoveredLink({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium hover:text-primary transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function ProductItem({
  title,
  description,
  href,
  src
}: ProductItemProps) {
  return (
    <Link href={href} className="flex items-center space-x-4 group">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-medium group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}