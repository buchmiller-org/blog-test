const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({
    "./water.min.css": "/water.min.css"
});
  return {
    pathPrefix: "/blog-test/",
  };
};
