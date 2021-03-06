/**
 * @see https://vuepress.vuejs.org/zh/
 */
module.exports = {
  port: "4000",
  dest: "dist",
  base: "/design/",
  title: "DESIGN",
  description: "DESIGN",
  head: [["link", {rel: "icon", href: `/favicon.ico`}]],
  markdown: {
    externalLinks: {
      target: "_blank", rel: "noopener noreferrer"
    }
  },
  themeConfig: {
    logo: "images/dunwu-logo-100.png",
    repo: "dunwu/design",
    repoLabel: "Github",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    smoothScroll: true,
    locales: {
      "/": {
        label: "简体中文", selectText: "Languages", editLinkText: "帮助我们改善此页面！", lastUpdated: "上次更新", nav: [{
          text: "架构", link: "/architecture/"
        }, {
          text: "设计模式", link: "/pattern/"
        }, {
          text: "重构", link: "/refactor/"
        }, {
          text: "🎯 博客", link: "https://github.com/dunwu/blog", target: "_blank", rel: ""
        }], sidebar: "auto", sidebarDepth: 2
      }
    }
  },
  plugins: [["@vuepress/active-header-links", {
    sidebarLinkSelector: ".sidebar-link", headerAnchorSelector: ".header-anchor"
  }], ["@vuepress/back-to-top", true], ["@vuepress/pwa", {
    serviceWorker: true, updatePopup: true
  }], ["@vuepress/medium-zoom", true], ["container", {
    type: "vue", before: '<pre class="vue-container"><code>', after: "</code></pre>"
  }], ["container", {
    type: "upgrade", before: info => `<UpgradePath title="${info}">`, after: "</UpgradePath>"
  }], ["flowchart"]]
};
