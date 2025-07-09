// docs - https://www.npmjs.com/package/next-sitemap
// TODO revisit when we add french

module.exports = {
  siteUrl: "https://hunteryeago.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
