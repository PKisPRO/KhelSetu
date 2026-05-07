import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // TODO: Add Supabase Storage domain when connected
    // domains: ['your-project.supabase.co']
    unoptimized: true,
  },
};

export default nextConfig;
