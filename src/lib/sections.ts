import { Data } from "@/types/data";
import { BlogMetadata } from "@/types/blog";

/**
 * A section is shown when it is switched on in data.json (visual.home.sections)
 * AND has at least one entry. Navbar links to hidden sections are hidden too.
 */
export function getVisibleSections(data: Data, posts: BlogMetadata[]) {
  const s = data.visual.home.sections;
  return {
    home: s.banner !== false,
    experience: s.experience && data.workExperience?.length > 0,
    projects: s.project && data.projects?.length > 0,
    skills: s.skills !== false && Object.keys(data.skills ?? {}).length > 0,
    education: s.education && data.education?.length > 0,
    testimonials: s.testimonial && data.testimonials?.length > 0,
    blogs: s.blog !== false && posts.length > 0,
  } as Record<string, boolean>;
}

/** "/#projects" or "#projects" -> "projects" (null for normal page links). */
export function sectionIdFromPath(path: string): string | null {
  const match = path.match(/^\/?#(.+)$/);
  return match ? match[1] : null;
}
