import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/home",
  { text: "生活富能量周刊",
   icon: "creative",
    link: "/weekly/README.md" ,
    activeMatch: "^/weekly/$"
  },
  { 
    text: "程序员指南", 
    icon: "creative",
    link: "/guide/README.md",
    activeMatch: "^/weekly/$"
  },
  { text: "周边商店", link: "https://shop108037867.taobao.com/"}


]);

// 原始案件，可以参考使用
// export default navbar([
//   "/",
//   "/home",
//   { text: "使用指南", icon: "creative", link: "/guide/" },
//   {
//     text: "博文",
//     icon: "edit",
//     prefix: "/posts/",
//     children: [
//       {
//         text: "文章 1-4",
//         icon: "edit",
//         prefix: "article/",
//         children: [
//           { text: "文章 1", icon: "edit", link: "article1" },
//           { text: "文章 2", icon: "edit", link: "article2" },
//           "article3",
//           "article4",
//         ],
//       },
//       {
//         text: "文章 5-12",
//         icon: "edit",
//         children: [
//           {
//             text: "文章 5",
//             icon: "edit",
//             link: "article/article5",
//           },
//           {
//             text: "文章 6",
//             icon: "edit",
//             link: "article/article6",
//           },
//           "article/article7",
//           "article/article8",
//         ],
//       },
//       { text: "文章 9", icon: "edit", link: "article9" },
//       { text: "文章 10", icon: "edit", link: "article10" },
//       "article11",
//       "article12",
//     ],
//   }
// ]);

