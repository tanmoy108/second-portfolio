/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {hostname: "i.ibb.co" },
        //   {hostname: "utfs.io" },
        ],
      },
};

export default nextConfig;
