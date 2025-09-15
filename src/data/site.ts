export const SITE = {
  title: "Sinan's Portfolio",
  titleTemplate: "%s | Sinan", 
  description: "Sinan 的个人网站 - 分享项目和思考",
  author: "Sinan",
  locale: "zh-CN",
  lang: "zh",
  url: "https://sinan-ai.net",
  repository: "https://github.com/sinan/portfolio", // 需要替换为你的实际 GitHub 仓库地址
} as const;

export const AUTHOR = {
  name: "Sinan",
  bio: "数据和增长专家，兼顾运营与自媒体",
  location: "中国",
  email: "sinan_minami@163.com",
  avatar: "/assets/images/photo.png",
} as const;

export const SOCIAL = {
  github: "https://github.com/sinanminami", 
  twitter: "https://x.com/sinan_minami",
  instagram: "https://instagram.com/sinan_minami",
  linkedin: "https://www.linkedin.com/in/sinan-tang-a51459a0/", // 替换为你的 LinkedIn 个人资料
  email: "sinan_minami@163.com",
} as const;

export const BRAND = {
  logo: "✨", // 可以自定义为你喜欢的 emoji 或符号
  name: "sinan",
  primaryColor: "#3b82f6", // Sinan 蓝 - 可以自定义为你的品牌色
  accentColor: "#1d4ed8",
} as const;

export const SEO = {
  ogImage: "/assets/images/og.png",
  favicon: "/assets/images/favicon.png",
  twitterCard: "summary_large_image",
} as const;
