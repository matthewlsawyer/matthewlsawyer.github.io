const SITE_URL = "https://www.matthewlsawyer.com";

module.exports = class {
  data() {
    return {
      permalink: "/sitemap.xml",
      eleventyExcludeFromCollections: true,
    };
  }

  render({ collections }) {
    const urls = collections.all
      .filter((page) => page.url && page.url !== "/sitemap.xml")
      .map((page) => {
        const loc = `${SITE_URL}${page.url}`;
        const lastmod =
          page.date instanceof Date
            ? `<lastmod>${page.date.toISOString().slice(0, 10)}</lastmod>`
            : "";

        return `<url><loc>${loc}</loc>${lastmod}</url>`;
      })
      .join("");

    return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  }
};
