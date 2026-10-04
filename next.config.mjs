import withMDX from "@next/mdx";

/**
 * GitHub Pages serves plain files, so the site is exported as static HTML into ./out.
 *
 * NEXT_PUBLIC_BASE_PATH is set automatically by the GitHub Actions workflow:
 *   - repo named <username>.github.io  -> ""          (site at https://<username>.github.io/)
 *   - any other repo, e.g. "portfolio" -> "/portfolio" (site at https://<username>.github.io/portfolio/)
 * Locally you don't need to set it.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX()(nextConfig);
