const withSvgr = require("next-svgr");
const withPWA = require("next-pwa");

module.exports = withSvgr(withPWA({ pwa: { dest: "public" } }));
