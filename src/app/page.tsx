/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData, getProfilePhoto } from "@/lib/serverUtils";
import { getVisibleSections } from "@/lib/sections";
import { asset, hasLink } from "@/lib/utils";
import Link from "next/link";
import { GlobeIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import { GitHubLogo, SocialLinks } from "@/components/brandIcons";
import ProfileAvatar from "@/components/profileAvatar";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();
  const photo = getProfilePhoto(data);
  const show = getVisibleSections(data, posts);

  return (
    <main>
      {/* Banner Section */}
      {show.home && (
        <section
          id="home"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-1/2 mx-auto lg:w-1/3">
              <ProfileAvatar name={data.personalInfo.name} photo={photo} />
            </div>
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Hey, I&apos;m {data.personalInfo.name}
                </h1>
                {(data.personalInfo.title || data.personalInfo.location) && (
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-lg font-medium">
                    {data.personalInfo.title && (
                      <span className="text-primary">{data.personalInfo.title}</span>
                    )}
                    {data.personalInfo.location && (
                      <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <SewingPinFilledIcon className="h-4 w-4" />
                        {data.personalInfo.location}
                      </span>
                    )}
                  </p>
                )}
              </div>
              <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
                {data.personalInfo.bio}
              </p>
              <SocialLinks contact={data.contactInfo} idPrefix="banner" />
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {show.experience && (
        <section
          id="experience"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">
            Work Experience
          </h2>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
            {data.workExperience.map((exp) => (
              <div key={exp.id} className="grid gap-1 relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                <h4 className="text-xl font-medium">
                  {exp.role} @
                  {hasLink(exp.companyWebsite) ? (
                    <a
                      href={exp.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="ml-2 text-primary">{exp.company}</span>
                  )}
                </h4>
                <div className="text-gray-500 dark:text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </div>
                {exp.technologies?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="mt-2">
                  <h6 className="font-medium">Key Responsibilities:</h6>
                  <ul className="text-gray-500 dark:text-gray-400 text-sm list-disc pl-4 space-y-1 mt-1">
                    {exp.keyResponsibilities.map((resp) => (
                      <li key={resp}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {show.projects && (
        <section
          id="projects"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {data.projects.map((project) => (
              <Card key={project.title} className="flex flex-col lg:flex-row">
                {project.cover && (
                  <div className="w-full lg:w-1/3 p-2 flex items-center">
                    <img
                      src={asset(project.cover)}
                      alt={`${project.title} cover`}
                      height={200}
                      width={300}
                      className="w-full aspect-video rounded-md object-cover"
                    />
                  </div>
                )}

                <div className={project.cover ? "w-full lg:w-2/3" : "w-full"}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  {(hasLink(project.live_url) || hasLink(project.code_repo_url)) && (
                    <CardFooter>
                      <div className="flex flex-wrap gap-3">
                        {hasLink(project.live_url) && (
                          <Button size="sm" asChild>
                            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                              <GlobeIcon className="h-3 w-3 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {hasLink(project.code_repo_url) && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.code_repo_url} target="_blank" rel="noopener noreferrer">
                              <GitHubLogo className="h-3.5 w-3.5 mr-2" />
                              Open Repository
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {show.skills && (
        <section
          id="skills"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Skills</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {Object.entries(data.skills).map(([category, items]) => (
              <Card key={category} className="p-6">
                <h3 className="font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {show.education && (
        <section
          id="education"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
            {data.education.map((ed) => (
              <div key={ed.id} className="grid gap-1 relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

                <h4 className="text-xl font-medium">{ed.degree}</h4>
                <h5 className="font-medium">{ed.institution}</h5>
                <div className="text-gray-500 dark:text-gray-400">
                  {ed.startDate} - {ed.endDate}
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{ed.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials Section (shown once you add real testimonials in data.json) */}
      {show.testimonials && (
        <section
          id="testimonials"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Testimonials</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {data.testimonials.map((t) => (
              <Card className="p-6 text-left" key={t.id}>
                <blockquote className="font-medium">
                  &ldquo;{t.feedback}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  {t.avatar && (
                    <Avatar>
                      <img
                        height={40}
                        width={40}
                        alt={t.name}
                        src={asset(t.avatar)}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </Avatar>
                  )}
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t.title} @ {t.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Blogs Section (shown once you publish a post) */}
      {show.blogs && (
        <section
          id="blogs"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Blogs</h2>

          <div className="flex flex-col space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}/`} className="group">
                <h3 className="text-xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="md:text-lg font-light">{post.description}</p>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  Published at: {post.publishDate}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
