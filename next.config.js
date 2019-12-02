const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')

module.exports = withMDX()(withCSS({}))
