import withMDX from "@next/mdx";

const nextConfig = {};

const mdx = withMDX({
  extension: /\.mdx?$/,
});

export default mdx({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  ...nextConfig,
});
