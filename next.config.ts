import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

import type { NextConfig } from 'next';

export default async (phase: string) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig: NextConfig = {
      reactStrictMode: true,
      output: 'export',
    };
    return nextConfig;
  }

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/auto-manufacturers', // GitHub pages
  };
  return nextConfig;
};
