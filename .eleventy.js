module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("HISTORY.md");

  eleventyConfig.addGlobalData("site", () => ({
    url: "https://www.matthewlsawyer.com",
  }));

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("posts/*.md")
      .sort((a, b) => b.date - a.date);
  });
};
