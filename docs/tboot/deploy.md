---
title: 部署手册
icon: markdown
order: 1
category: TBoot脚手架
  - 
---

## 部署手册


### 前端

npm install 安装前端依赖
npm run dev 启动项目


### 后端

先运行tboot.sql
后端请使用tboot-back这个项目, application.yml 指定使用的配置文件,在配置文件中修改mysql redis 连接配置
使用idea打开项目
启动





### 常见问题

- 在导入SQL时提示**Row size too large (> 8126)** 

  解决方案： 关闭InnoDB严格模式

  ```sql
  set global innodb_strict_mode  = 0;
  ```

  

