/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverActions:{
      bodySizeLimit:'5mb',
      allowedOrigins:[
        'localhost:3000',
        '*.devtunnels.ms'
      ]
    }
  }
};

export default nextConfig;
