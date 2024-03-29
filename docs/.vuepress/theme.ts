import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://github.com/canghaihongxin/weekly",

  author: {
    name: "生活富能量",
    url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/canghaihongxin/weekly",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: false,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "爱科技，爱健康，爱生活",
    intro: "/intro.html",
    medias: {
      Email: "canghaihongxin@163.com",
      GitHub: "https://github.com/canghaihongxin/weekly",
      QQ: "690919833",
      Wechat: "canghaihongxin",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      filter: (page) => page.title.search("生活富能量") != -1
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://weekly-waline-te8i-669g9tf5u-canghaihongxin.vercel.app/",
    },

    mdEnhance: {
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
