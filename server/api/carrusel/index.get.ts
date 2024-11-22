export default defineEventHandler((event) => {
  interface imagenes {
    url: string;
  }

  const imagenes_api: imagenes[] = [
    {
      url: "/img/a.jpeg",
    },
    {
      url: "/img/b.jpeg",
    },
    {
      url: "/img/c.jpeg",
    },
    {
      url: "/img/d.jpeg",
    },
  ];
  return imagenes_api;
});
