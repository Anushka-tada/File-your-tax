// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const nextConfig = {
    output: "standalone", // Ensure Vercel serves properly
    experimental: { appDir: true }
  };
  
  export default nextConfig;
  
  