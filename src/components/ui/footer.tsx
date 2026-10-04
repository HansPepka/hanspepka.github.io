import React from "react";
import { getJSONData } from "@/lib/serverUtils";
import { SocialLinks } from "@/components/brandIcons";

export default async function Footer() {
  const data = await getJSONData();
  const year = new Date().getFullYear();

  return (
    <footer className="container max-w-5xl mx-auto border-t mt-20 py-8">
      <div className="flex flex-col items-center gap-4">
        <p className="font-medium">Let&apos;s connect</p>
        <SocialLinks contact={data.contactInfo} idPrefix="footer" size="sm" />
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          &copy; {year} {data.personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 text-center">
          Template by
          <a
            href="https://github.com/Logging-Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary hover:underline"
          >
            Logging Studio
          </a>{" "}
          • Distributed by
          <a
            href="https://themewagon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary hover:underline"
          >
            ThemeWagon
          </a>
        </p>
      </div>
    </footer>
  );
}
