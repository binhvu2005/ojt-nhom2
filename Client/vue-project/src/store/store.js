import createStore from "vuex";
import userModule from "./modules/user.module";

const store = createStore({
  modules: {
    userModule,
  },
});
export default store;
