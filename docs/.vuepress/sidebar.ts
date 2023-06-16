import { sidebar } from "vuepress-theme-hope";

// export default sidebar([
  
//   {
//     text: "TBoot脚手架",
//     icon: "creative",
//     prefix: "/tboot/",
//     collapsable: true,
//     link: "/tboot/",
//     children: "structure",
//   },
//   // "/home",
//   // {
//   //   text: "指南",
//   //   icon: "creative",
//   //   prefix: "/guide/",
//   //   link: "/guide/",
//   //   children: "structure",
//   //   collapsable: true,
//   // },
//   // {
//   //   text: "文章",
//   //   icon: "note",
//   //   prefix: "/posts/",
//   //   children: [
//   //     {
//   //       text: "文章 1-4",
//   //       icon: "note",
//   //       collapsable: true,
//   //       prefix: "article/",
//   //       children: ["article1", "article2", "article3", "article4"],
//   //     },
//   //     {
//   //       text: "文章 5-12",
//   //       icon: "note",
//   //       children: [
//   //         {
//   //           text: "文章 5-8",
//   //           icon: "note",
//   //           collapsable: true,
//   //           prefix: "article/",
//   //           children: ["article5", "article6", "article7", "article8"],
//   //         },
//   //         {
//   //           text: "文章 9-12",
//   //           icon: "note",
//   //           children: ["article9", "article10", "article11", "article12"],
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },

// ]);

export default sidebar([
  
  {
    // 必要的，分组的标题文字
    text: "HUTOOL商城",
    // 可选的, 分组标题对应的图标
    icon: "tip",
    // 可选的, 分组标题对应的链接
    link: "/guide/",
    // 可选的，会添加到每个 item 链接地址之前
    prefix: "/guide/ECommerce/",
    // 可选的, 设置分组是否可以折叠，默认值是 false,
    collapsible: true,
    // 必要的，分组的子项目
    children: [
      "简介.md" /* /foo/index.html */,
    ],
  },{
    // 必要的，分组的标题文字
    text: "并发编程",
    // 可选的, 分组标题对应的图标
    icon: "tip",
    // 可选的, 分组标题对应的链接
    link: "/guide/",
    // 可选的，会添加到每个 item 链接地址之前
    prefix: "/guide/ConcurrentProgramming/",
    // 可选的, 设置分组是否可以折叠，默认值是 false,
    collapsible: true,
    // 必要的，分组的子项目
    children: [
      "可见性，有序性，原子性的问题.md" /* /foo/index.html */,
      "如何解决可见性和有序性问题.md"
    ],
  }
]);
