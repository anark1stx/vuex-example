import vue from "vue";
import vuex from "vuex";
import todos from "./modules/todos";

// Load vuex

vue.use(vuex);

//Create store

export default new vuex.Store({
    modules: {
        todos
    }
})