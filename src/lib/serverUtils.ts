import path from "path";
import fs from "fs";
import { Data } from "@/types/data";
import { BlogMetadata } from "@/types/blog";

function isBlogHeaderData(data: any): data is BlogMetadata {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.isPublished === "boolean" &&
    typeof data.slug === "string" &&
    typeof data.publishDate === "string"
  );
}

export async function getJSONData(): Promise<Data> {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(file);
}

/**
 * Finds your profile photo at build time.
 * 1. If data.json has personalInfo.photo set, that path is used.
 * 2. Otherwise looks for public/assets/profile.jpg / .jpeg / .png / .webp.
 * 3. If nothing is found, returns null and the site shows your initials instead.
 */
export function getProfilePhoto(data: Data): string | null {
  const configured = data.personalInfo.photo?.trim();
  if (configured) return configured;

  const assetsDir = path.join(process.cwd(), "public", "assets");
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(assetsDir, `profile.${ext}`))) {
      return `/assets/profile.${ext}`;
    }
  }
  return null;
}

/**
 * Reads every folder in src/app/blogs that contains a page.mdx.
 * Folders starting with "_" (like _example-post) are drafts and are skipped,
 * as are posts with isPublished: false.
 */
export async function getBlogPosts(): Promise<BlogMetadata[]> {
  const contentDirPath = path.join(process.cwd(), "src/app/blogs");
  const postDirs = fs
    .readdirSync(contentDirPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory() && !dir.name.startsWith("_"))
    .filter((dir) =>
      fs.existsSync(path.join(contentDirPath, dir.name, "page.mdx"))
    )
    .map((dir) => dir.name);

  const blogs = await Promise.all(
    postDirs.map(async (postDir) => {
      const { metadata } = await import(`@/app/blogs/${postDir}/page.mdx`);

      if (isBlogHeaderData(metadata)) {
        return { ...metadata, slug: postDir };
      }

      throw new Error(`Blog metadata missing or invalid in ${postDir}/page.mdx`);
    })
  );

  return blogs.filter((post) => post.isPublished);
}
