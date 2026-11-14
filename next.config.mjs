// /edelas is a preview copy of edelasapparel.com and must stay out of search
// results (including Google Images) so it never competes with the original.
const noIndexHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      { source: "/edelas", headers: noIndexHeaders },
      { source: "/edelas/:path*", headers: noIndexHeaders },
      {
        source: "/_next/image",
        has: [{ type: "query", key: "url", value: "/edelas/(?<file>.*)" }],
        headers: noIndexHeaders,
      },
    ];
  },
};

export default nextConfig;
