import { getUsersApi, editUserApi, createUserApi } from "@/api/userApi";

const userModule = {
  state: {
    users: [],
    user: null,
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    UPDATE_USER(state, updatedUser) {
      state.user = updatedUser;
      const userIndex = state.users.findIndex(
        (user) => user.id === updatedUser.id
      );
      if (userIndex !== -1) {
        state.users.splice(userIndex, 1, updatedUser);
      }
    },
    ADD_USER(state, newUser) {
      state.user = newUser;
      state.users.push(newUser);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const res = await getUsersApi();
        commit("SET_USERS", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUser({ commit }, payload) {
      try {
        const res = await getUsersApi(payload);
        commit("SET_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchEditUser({ commit }, payload) {
      try {
        const res = await editUserApi(payload);
        commit("SET_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCreateUser({ commit }, payload) {
      try {
        const res = await createUserApi(payload);
        commit("SET_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
export default userModule;
