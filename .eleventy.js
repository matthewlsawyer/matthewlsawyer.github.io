module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("blog/*.md")
      .sort((a, b) => b.date - a.date);
  });
};
