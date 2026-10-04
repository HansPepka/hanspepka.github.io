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
      </div>
    </footer>
  );
}
