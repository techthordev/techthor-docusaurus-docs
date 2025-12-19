import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This file runs in Node.js – no browser APIs here

const config: Config = {
  title: 'TechThor Developer Hub',
  tagline: 'Developer notes, guides and experiments',
  favicon: 'img/favicon.ico',

  url: 'https://docs.techthordev.com.br',
  baseUrl: '/',

  organizationName: 'techthordev',
  projectName: 'techthor-docusaurus-docs',

  onBrokenLinks: 'throw',
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // docs direkt auf /
          editUrl: 'https://github.com/techthordev/techthor-docusaurus-docs/tree/main/',
        },
        blog: false, // erstmal AUS – Fokus Docs
        theme: {
          customCss: './src/css/tailwind.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'TechThorDev',
      logo: {
        alt: 'TechThorDev Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/techthordev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Getting Started', to: '/intro'}],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Project - LeetCode',
              href: 'https://leetcode.techthordev.com.br',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/techthordev',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Thorsten Fey - TechThorDev. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
