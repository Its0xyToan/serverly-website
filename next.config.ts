import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/support',
        destination: 'https://discord.gg/qBpWMHYdQx',
        permanent: true,
      },
      {
        source: '/invite/:id',
        destination: 'https://discord.com/oauth2/authorize?client_id=1328111647440764928&permissions=572262987590870&integration_type=0&scope=applications.commands+bot&guild_id=:id',
        permanent: true,
      },
      {
        source: '/invite',
        destination: 'https://discord.com/oauth2/authorize?client_id=1328111647440764928&permissions=572262987590870&integration_type=0&scope=applications.commands+bot',
        permanent: true
      },
    ]
  },
    experimental: {
    	workerThreads: false,
        cpus: 4
    }
};

export default nextConfig;
