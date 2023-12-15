import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    isLogin: false,
    i: 0,
  }),

  actions: {
    addUser(email, username, password) {
      const newUser = { email, username, password };
      this.users.push(newUser);
    },
    editUser(email, username, password) {
      const newUser = { email, username, password };
      this.users[this.i] = newUser;
    },
    reachAlert() {
      alert("YESSSSS");
    },
    setIsLogin(value) {
      this.isLogin = value;
    },
    setI(value) {
      this.i = value;
    },
  },
  getters: {
    getUsers: (state) => state.users,
    getIsLogin: (state) => state.isLogin,
    getI: (state) => state.i,
    getUserByIndex: (state) => (index) => state.users[index],
  },
});
