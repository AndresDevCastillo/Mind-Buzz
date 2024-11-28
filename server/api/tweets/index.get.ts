export default defineEventHandler( event => {

    interface Reply {
        avatar: string;
        username: string;
        createTime: string;
        content: string;
        retweets: number;
        likes: number;
        replies?: Reply[];
    }
    
    
    interface Tweet {
        avatar: string;
        username: string;
        createTime: string;
        content: string;
        views: number;
        retweets: number;
        likes: number;
        replies?: Reply[]; 
    }
    

    const tweets : Tweet[] = [
        {
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          username: 'Fujoshi 69 UwU',
          content: '¡Este es mi primer tweet! 🎉',
          createTime: '3 de marzo 2023',
          views: 123,
          retweets: 5,
          likes: 20,
          replies: [
            {
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              username: 'Ana Gómez',
              createTime: '1h',
              content: '¡Felicidades por tu primer tweet! 😊',
              retweets: 2,
              likes: 10,
              replies: [
                {
                  avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                  username: 'Carlos Ruiz',
                  createTime: '30m',
                  content: '¡Estoy de acuerdo con Ana! 👍',
                  retweets: 1,
                  likes: 5,
                },
              ],
            },
            {
              avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
              username: 'Luis Fernández',
              createTime: '45m',
              content: '¡Bienvenido a Twitter, Juan! 🎉',
              retweets: 3,
              likes: 8,
            },
          ],
        },
      ];

      return tweets;
})


