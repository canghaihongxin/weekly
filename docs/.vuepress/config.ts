import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "程序员指南",
  description: "[ 小白入门+能力提升+面试指导 ] 一份包含了程序员所需的大部分知识,提升,求职,必备的指南!",
  base: "/",

  theme,
});
