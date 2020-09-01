const withPlugins = require('next-compose-plugins');
const nextConfiguration = {
  // useFileSystemPublicRoutes: false,
  // distDir: 'build',
};
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
const withSvgr = require('next-svgr');

const path = require('path');
module.exports = withPlugins(
  [
    withMDX({
      // Pick up MDX files in the /pages/ directory
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    }),
    // handle svgs in public/svg
    withSvgr,
  ],
  nextConfiguration
);
