// @ts-check
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      reactStrictMode: true,
      output: 'export',
    };
    return nextConfig;
  }

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/auto-manufacturers', // GitHub pages
  };
  return nextConfig;
};
