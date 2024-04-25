const path = require('path')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
      reactStrictMode: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import 'base.scss';`
  },
}