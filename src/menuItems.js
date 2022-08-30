export const menuItems = [
  {
    title: "SHOP BY CATEGORY",
    url: "/",
    home: true,
    submenu: [
      {
        title: "web design",
        url: "web-design",
      },
      {
        title: "web development",
        url: "web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "node",
              },
              {
                title: "PHP",
                url: "php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },
];
