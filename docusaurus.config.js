// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello! 我是一洋',
  tagline: '学问是苦根上长出来的甜果。',
  url: 'https://umeimmense.github.io',
  baseUrl: '/homepage/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'umeimmense', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/umeimmense/homepage/blob/main/docs/intro.md',
        },
        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} YI YANG FU.`,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/umeimmense/homepage/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '一洋',
        logo: {
          alt: 'Logo',
          src: 'img/avatar.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '教程',
          },
          {to: '/blog', label: '博客', position: 'right'},
          { to: '/note', label: '读书笔记',position: 'right' },
          {
            href: 'https://umeimmense.github.io/resume',
            label: '简历',
            position: 'right',
          },
          {
            href: 'https://github.com/umeimmense/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'announcementBar', // Any value that will identify this message.
        content: `👊坚持学习，持续进步🌞。`,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} YI YANG FU 基于 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
