import { defineStore } from "pinia";

interface User {
  username: string;
  email: string;
  description: string;
  avatar: string;
}

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    users: [] as User[],
    user: {} as User,
  }),
  persist: true,
  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    async fetchUser() {
      const userData = await $fetch("/api/user");
      console.log(userData);
      this.user = userData;
    },
  },
});
