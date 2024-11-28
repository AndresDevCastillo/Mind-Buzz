import { defineStore } from "pinia";

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

export const useTweetsStore = defineStore({
  id: "tweetsStore",
  state: () => ({
    tweets: [] as Tweet[],
  }),
  persist: true,
  getters: {
    getTweets: (state) => state.tweets,
  },

  actions: {
    async getTweetsApi(){
        const tweetsDataApi = await  $fetch('/api/tweets')
        this.tweets = tweetsDataApi;
    
    },

    createReply(index: number, reply: Reply){
      this.tweets[index].replies?.push(reply);
    },

    deleteReply(index:number, indexReply: number){
      this.tweets[index].replies?.splice(indexReply, 1);
    }

  }
});

