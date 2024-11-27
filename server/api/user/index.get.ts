export default defineEventHandler((event) => {
  interface User {
    username: string;
    email: string;
    description: string;
    avatar: string;
  }

  const users: User[] = [
    {
      username: "Fujoshi 69 UwU",
      email: "causild675@gmail.com",
      description: "Passionate developer and tech enthusiast.",
      avatar: "/img/daggi.jpg", // Aquí iría la URL de la foto del usuario
    },
  ];

  return users[0];
});
