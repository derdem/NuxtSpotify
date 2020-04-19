export default {
  srcDir: "src",
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  modules: [
    "nuxt-stack",
    "@nuxtjs/axios"
  ],
  styles: ["styles/index.scss"],
  styleResources: {
    scss: ["styles/theme.scss"]
  },
  stack: {
    name: "Nuxt Stack",
    host: "https://nuxtstack.org/",
    description: "Stacks of goodness for Nuxt",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#4FC08D",
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com"
    ]
  },
  webfonts: {
    google: {
      families: [
        "Quicksand:500",
        "Roboto Mono:400&display=swap" // https://git.io/fjjcJ
      ]
    }
  },
  axios: {
    
  }
}
