export default {
  title: "Venture",
  description:
    "A package to manage complex workflows built on top off Laravel's queue.",

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839" },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    ["meta", { name: "msapplication-config", content: "/browserconfig.xml" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],

  themeConfig: {
    repo: "ksassnowski/venture",
    docsRepo: "ksassnowski/venture-docs",
    logo: "/logo.svg",
    siteTitle: false,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Made by Kai Sassnowski",
    },

    algolia: {
      apiKey: "aaf12df2ddf34696e87f6ae1f8e5cfe3",
      indexName: "laravel_venture",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ksassnowski/venture" },
    ],

    sidebar: [
      {
        text: "Package",
        collapsible: true,
        items: [
          { link: "/what-is-venture", text: "What is Venture?" },
          { link: "/upgrade-guide", text: "Upgrade Guide" },
          { link: "/installation", text: "Installation" },
        ],
      },
      {
        text: "Usage",
        collapsible: true,
        items: [
          {
            link: "/usage/preparing-your-jobs",
            text: "Preparing your jobs",
          },
          {
            link: "/usage/configuring-workflows",
            text: "Configuring workflows",
          },
          {
            link: "/usage/duplicate-jobs",
            text: "Using multiple instances of the same job",
          },
          {
            link: "/usage/nesting-workflows",
            text: "Nesting workflows",
          },
          {
            link: "/usage/keeping-track-of-workflows",
            text: "Keeping track of workflows",
          },
          { link: "/usage/dealing-with-errors", text: "Dealing with errors" },
        ],
      },
      {
        text: "Extending Venture",
        collapsible: true,
        items: [
          { link: "/extending-venture/plugins", text: "Writing plugins" },
          {
            link: "/extending-venture/lifecycle-hooks",
            text: "Workflow lifecycle hooks",
          },
        ],
      },
      {
        text: "Testing",
        collapsible: true,
        items: [
          { link: "/testing/introduction", text: "Introduction" },
          {
            link: "/testing/testing-workflow-definitions",
            text: "Testing workflows",
          },
          {
            link: "/testing/faking-workflows",
            text: "Faking workflows",
          },
        ],
      },
      {
        text: "Configuration",
        collapsible: true,
        items: [
          {
            link: "/configuration/table-names",
            text: "Changing the table names",
          },
          {
            link: "/configuration/customizing-models",
            text: "Customizing models",
          },
          {
            link: "/configuration/customizing-model-states",
            text: "Customizing model states",
          },
        ],
      },
    ],
  },
};
