import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "主题演示",
  description: "vuepress-theme-hope 的演示",

  base: "/weekly/",

  theme,
});
