import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path(.+)",
        has: [
          {
            type: "query",
            key: "path",
            value: "(?!favicon\\.ico$).*"
          }
        ],
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
