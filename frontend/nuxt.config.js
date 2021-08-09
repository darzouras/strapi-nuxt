const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export default {
  target: "static",
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&display=swap",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "@assets/css/main.scss"
  ],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi"],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection",
      },
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "homepage",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
};
