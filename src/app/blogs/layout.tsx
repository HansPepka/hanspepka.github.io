import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-5xl mx-auto py-8">
      <Link
        href="/#blogs"
        className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
      >
        &larr; Back to home
      </Link>
      <article className="blog-post mt-6">{children}</article>
    </div>
  );
}
