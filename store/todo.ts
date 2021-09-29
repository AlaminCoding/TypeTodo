import { TODOS } from "~/utils/store/getter.names";
import { ADD_TODO, REMOVE_TODO } from "~/utils/store/action.names";
import { ADD_TODOS, REMOVE_TODOS } from "~/utils/store/mutation.names";
import { GetterTree, ActionTree, MutationTree } from "vuex";
import Vue from "vue";

export const state = () => ({
  todos: ["Study", "Coding", "Gaming", "Learning"]
});

type rootState = ReturnType<typeof state>;

export const getters: GetterTree<rootState, rootState> = {
  [TODOS](state: any) {
    return state.todos;
  }
};

export const actions: ActionTree<rootState, rootState> = {
  [ADD_TODO]({ commit }, payload: any) {
    let data: String = payload;
    commit(ADD_TODOS, data);
  },
  [REMOVE_TODO]({ commit }, payload: any) {
    let data: String = payload;
    commit(REMOVE_TODOS, data);
  }
};

export const mutations: MutationTree<rootState> = {
  [ADD_TODOS](state: any, todo: any) {
    Vue.set(state.todos, state.todos.length, todo);
  },
  [REMOVE_TODOS](state: any, index: any) {
    Vue.delete(state.todos, index);
  }
};
