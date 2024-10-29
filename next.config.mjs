import withMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";
// const {
//   withHydrationOverlay,
// } = require("@builder.io/react-hydration-overlay/next");
import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

async function getNextConfig() {
  const recmaMdxDisplayname = await import("recma-mdx-displayname");

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
        {
          protocol: "https",
          hostname: "kipiiler.github.io",
          port: "",
        },
      ],
    },
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  };

  const mdxConfig = {
    extension: /\.mdx?$/,
    options: {
      recmaPlugins: [recmaMdxDisplayname.default],
    },
  };

  return withMDX(mdxConfig)(nextConfig);
}

const nextConfig = await getNextConfig();

export default withContentlayer(nextConfig);
