import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "生活富能量",
  description: "生活富能量",

  base: "/",

  theme,
});
